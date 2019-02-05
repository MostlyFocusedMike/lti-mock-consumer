<?php
/*
This is a mock-LTI-consumer, it is taking the place of the LMS
The mock-lti-provider (the fake tool we're integrating) is mocked by lit.tools/saltire/tp

below there are some terms, they mean the following:
context: the course
resource: the link from inside the course section where the provider is launched

Remember, PHP's start server command is:
    $ php -S localhost:8080
*/


# ------------------------------
# START CONFIGURATION SECTION
$launch_url = "https://lti.tools/saltire/tp"; // this is the modern test tool url that doesn't require account
$key = "12345";
$secret = "secret";
$launch_data = array(
    "lti_version" => "LTI-1p0", // ! required: the current version of LTI
    "lti_message_type" => "basic-lti-launch-request", // ! required: always set to 'basic-lti-launch-request
    "resource_link_id" => "120988f929-274612", // ! required: unique id referencing the link (or 'place') where the provider was launched in the consumer
	"user_id" => "292832126", // * recomended: current id of user
    "roles" => "Instructor", // * recomended: what is the current users role in the course
	"resource_link_title" => "Section 1, paragraph2: what is a keyboard",  // * recomended: name of the link that launched the app
	"resource_link_description" => "A fun video explaining the history of the keyboard", // optional: description of the link
	"lis_person_name_full" => "Jane A. Doe", // * recomended: full name
	"lis_person_name_family" => "Doe", // * recomended: last name
	"lis_person_name_given" => "Jane", // * recomended: first name
	"lis_person_contact_email_primary" => "user@school.edu", // * recomended: user email (may not be sent if provider is configured for anonymity)
	"context_id" => "456434513", // * recomended: unique id of the course
	"context_title" => "Intro to Computers: CS 101", // * recomended: the name of the course
	"context_label" => "SI182", // * reocmended: short name or course code of the course
	"tool_consumer_instance_guid" => "lms.princeton.edu", // * STRONGLY recomended: unique id referencing the instance from which the user is accessing the app.
    "tool_consumer_instance_description" => "Princton University LMS" // optional: description of the instance from which the user is accessing the app.
);
// * for a full list of params: https://www.edu-apps.org/code.html#params
# END OF CONFIGURATION SECTION
# ------------------------------

# Basic LTI uses OAuth to sign requests
# OAuth Core 1.0 spec: http://oauth.net/core/1.0/
$now = new DateTime();
$launch_data["oauth_callback"] = "about:blank";
$launch_data["oauth_consumer_key"] = $key;
$launch_data["oauth_version"] = "1.0";
$launch_data["oauth_nonce"] = '5c58b57a1a5e2'; # uniqid('', true);
$launch_data["oauth_timestamp"] = $now->getTimestamp(); # '1549386076';
$launch_data["oauth_signature_method"] = "HMAC-SHA1";
# In OAuth, request parameters must be sorted by name
$launch_data_keys = array_keys($launch_data);
sort($launch_data_keys);
$launch_params = array();
foreach ($launch_data_keys as $key) {
  array_push($launch_params, $key . "=" . rawurlencode($launch_data[$key]));
}
$base_string = "POST&" . urlencode($launch_url) . "&" . rawurlencode(implode("&", $launch_params));
$secret = urlencode($secret) . "&";
$signature = base64_encode(hash_hmac("sha1", $base_string, $secret, true));
?>

<html>
<head>
    <title>PHP LMS</title>
</head>
<!-- <body onload="document.ltiLaunchForm.submit();"> -->
<body>
<h2>The Greatest LMS of ALL TIME</h2>
<form id="ltiLaunchForm" name="ltiLaunchForm" method="POST" action="<?php printf($launch_url); ?>">
<?php foreach ($launch_data as $k => $v ) { ?>
    <label for=""><?php echo $k ?></label>
	<input name="<?php echo $k ?>" value="<?php echo $v ?>">
<?php } ?>
    <input name="oauth_signature" value="<?php echo $signature ?>">
    <p><?php echo $signature ?></p>
	<button type="submit">Launch</button>
</form>

<?php echo $base_string; ?>
<body>
</html>
