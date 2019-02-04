<?php
/*
This is a mock-LTI-consumer, it is taking the place of the LMS

Remember, PHP's start server command is:
    $ php -S localhost:8080
*/


# ------------------------------
# START CONFIGURATION SECTION
$launch_url = "https://lti.tools/saltire/tp"; // this is the modern test tool url that doesn't require account
$key = "12345";
$secret = "secret";
$launch_data = array(
    "lti_version" => "LTI-1p0", // ! required
    "lti_message_type" => "basic-lti-launch-request", // ! required
    "resource_link_id" => "120988f929-274612", // ! required
	"user_id" => "292832126", // recomended
    "roles" => "Instructor", // recomended
	"resource_link_title" => "My SICK Blog",  // recomended
	"resource_link_description" => "A weekly blog.",
	"lis_person_name_full" => "Jane Q. Public", // recomended
	"lis_person_name_family" => "Public", // recomended
	"lis_person_name_given" => "Given", // recomended
	"lis_person_contact_email_primary" => "user@school.edu",
	"lis_person_sourcedid" => "school.edu:user",
	"context_id" => "456434513", // recomended
	"context_title" => "This is the context title right here",
	"context_label" => "SI182",
	"tool_consumer_instance_guid" => "lmsng.school.edu",
	"tool_consumer_instance_description" => "University of School (LMSng)"
);
# END OF CONFIGURATION SECTION
# ------------------------------

# Basic LTI uses OAuth to sign requests
# OAuth Core 1.0 spec: http://oauth.net/core/1.0/
$now = new DateTime();
$launch_data["oauth_callback"] = "about:blank"; // * required
$launch_data["oauth_consumer_key"] = $key; // * required
$launch_data["oauth_version"] = "1.0"; // * required
$launch_data["oauth_nonce"] = uniqid('', true); // * required
$launch_data["oauth_timestamp"] = $now->getTimestamp(); // * required
$launch_data["oauth_signature_method"] = "HMAC-SHA1"; // * required
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
<head></head>
<!-- <body onload="document.ltiLaunchForm.submit();"> -->
<body>
<h2>The Greatest LMS of ALL TIME</h2>
<form id="ltiLaunchForm" name="ltiLaunchForm" method="POST" action="<?php printf($launch_url); ?>">
<?php foreach ($launch_data as $k => $v ) { ?>
	<input type="hidden" name="<?php echo $k ?>" value="<?php echo $v ?>">
<?php } ?>
	<input type="hidden" name="oauth_signature" value="<?php echo $signature ?>">
	<button type="submit">Launch</button>
</form>
<body>
</html>
