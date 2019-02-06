const oauth = require('oauth-sign'); // an oauth1 signer

const launchURL = 'https://lti.tools/saltire/tp'; // ! required: the URL of the tool provider
const launchParams = {
    /* LTI params */
    lti_version: 'LTI-1p0', // ! required: the current version of LTI
    lti_message_type: 'basic-lti-launch-request', // ! required: always set to 'basic-lti-launch-request
    resource_link_id: '120988f929-274612', // ! required: unique id referencing the link (or 'place') where the provider was launched in the consumer
    user_id: '292832126', // * recomended: current id of user
    roles: 'Instructor', // * recomended: what is the current users role in the course
    resource_link_title: 'Section 1, paragraph2: what is a keyboard', // * recomended: name of the link that launched the app
    resource_link_description: 'A fun video explaining the history of the keyboard', // optional: description of the link
    lis_person_name_full: 'Jane A. Doe', // * recomended: full name
    lis_person_name_family: 'Doe', // * recomended: last name
    lis_person_name_given: 'Jane', // * recomended: first name
    lis_person_contact_email_primary: 'user@school.edu', // * recomended: user email (may not be sent if provider is configured for anonymity)
    context_id: '456434513', // * recomended: unique id of the course
    context_title: 'Intro to Computers: CS 101', // * recomended: the name of the course
    context_label: 'SI182', // * recomended: short name or course code of the course
    tool_consumer_instance_guid: 'lms.princeton.edu', // * STRONGLY recomended: unique id referencing the instance from which the user is accessing the app.
    tool_consumer_instance_description: 'Princeton University (LMS)', // optional: description of the instance from which the user is accessing the app.
    // * Check out more params at: https://www.edu-apps.org/code.html#params

    /* OAuth data */
    oauth_callback: 'about:blank',
    oauth_consumer_key: '12345',
    oauth_version: '1.0',
    oauth_nonce: '5c58b57a1a5e2', // this SHOULD be unique id, we're faking it
    oauth_timestamp: (Math.round((new Date()).getTime() / 1000)), // we need the unix timestamp in seconds, not milliseconds
    oauth_signature_method: 'HMAC-SHA1',
};

// Basic LTI uses OAuth to sign requests
// * OAuth Core 1.0 spec: http://oauth.net/core/1.0/
// ! the mock Tool provider tester expects the secret to just be 'secret'
launchParams.oauth_signature = oauth.hmacsign('POST', launchURL, launchParams, 'secret');

module.exports = {
    launchParams,
    launchURL,
};
