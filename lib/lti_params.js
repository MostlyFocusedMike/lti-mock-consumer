module.exports = {
    /* LTI params */
    lti_version: 'LTI-1p0', // ! required: the current version of LTI
    lti_message_type: 'basic-lti-launch-request', // ! required: always set to 'basic-lti-launch-request
    resource_link_id: '120988f929-274612', // ! required: unique id referencing the link (or 'place') where the provider was launched in the consumer
    user_id: '292832126', // * recomended: current id of user
    roles: 'Instructor', // * recomended: what is the current users role in the course
    resource_link_title: 'How does a keyboard work', // * recomended: A plain text title for the resource. This is the clickable text that appears in the link.
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
    launch_presentation_width: 320,
    launch_presentation_height: 240,
    launch_presentation_return_url: 'http://0.0.0.0:3030/return',
    launch_presentation_locale: 'en-US',
    launch_presentation_document_target: 'iframe',
    tool_consumer_info_product_family_code: 'desire2learn',
    tool_consumer_info_version: '9.2.4',
    tool_consumer_instance_name: 'SchoolU',
    tool_consumer_instance_url: 'http://lmsng.school.edu',
    custom_key_goes_here: 'custom value here',

    lis_outcome_service_url: 'http://0.0.0.0:3030/return', // this is the basic outcomes toggle
    // * Check out more params at: https://www.edu-apps.org/code.html#params

    /* OAuth data */
    // this is one legged OAuth1
    // literally all it does is encode a signature to ensure that your params and the decoded launch params in the signature match
    oauth_callback: 'about:blank',
    oauth_consumer_key: '12345',
    oauth_version: '1.0',
    oauth_nonce: '5c58b57a1a5e2', // this SHOULD be unique id, we're faking it
    oauth_timestamp: (Math.round((new Date()).getTime() / 1000)), // we need the unix timestamp in seconds, not milliseconds
    oauth_signature_method: 'HMAC-SHA1', // * lti 1.x seems to prefer this algo
};
