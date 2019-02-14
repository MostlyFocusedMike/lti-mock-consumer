module.exports = {
    /* LTI params */
    lti_version: 'LTI-1p0', // ! required: the current version of LTI
    lti_message_type: 'basic-lti-launch-request', // ! required: set to 'basic-lti-launch-request (can be other values though so same endpoint can do multiple things)
    resource_link_id: '120988f929-274612', // ! required: unique id referencing the link (or 'place') where the provider was launched in the consumer
    resource_link_title: 'How does a keyboard work', // * recomended: A plain text title for the resource. This is the clickable text that appears in the link.
    resource_link_description: 'A fun video explaining the history of the keyboard', // optional: description of the link
    roles: 'Instructor', // * recomended: what is the current user's role in the course, can be comma separated list, and should only use LIS approved context roles
    user_id: '292832126', // * recomended: current id of user
    lis_person_name_full: 'Jane A. Doe', // * recomended: full name
    lis_person_name_family: 'Doe', // * recomended: last name
    lis_person_name_given: 'Jane', // * recomended: first name
    lis_person_contact_email_primary: 'user@school.edu', // * recomended: user email (may not be sent if provider is configured for anonymity)
    user_image: 'https://avatarfiles.alphacoders.com/985/98561.jpg', // optional: a profile image for the user
    context_id: '456434513', // * recomended: unique id of the course
    context_type: 'Course', // optional: one or more comma separated values that identify the type of context. Values are from the LIS list of approved URNs
    context_title: 'Intro to Computers: CS 101', // * recomended: the name of the course
    context_label: 'SI182', // * recomended: short name or course code of the course
    tool_consumer_instance_description: 'Princeton University (LMS)', // optional: description of the instance from which the user is accessing the app.
    launch_presentation_width: 320, // * recomended: easy way to let TP know dimensions without js, can be overridden
    launch_presentation_height: 240, // * recomended: easy way to let TP know dimensions without js, can be overridden
    launch_presentation_return_url: 'http://0.0.0.0:3030/return', // * recomended: A TC url that the TP can return to once it's done or if an error occurs
    launch_presentation_locale: 'en-US', // * recomended: Language, country and variant as represented using the IETF Best Practices for Tags for Identifying Languages
    launch_presentation_document_target: 'iframe', // * recomended: should be 'frame', 'iframe', or 'window', helpful way to give info, can be overriden by TP's JS
    tool_consumer_info_product_family_code: 'sakai', // * recomended: the name of the tool consumer's LMS platform, like "sakai", which is used by a bunch of colleges
    tool_consumer_info_version: '9.2.4', // * recomended: semantic version of the tool consumer
    tool_consumer_instance_guid: 'sakai.rutgers.edu', // * STRONGLY recomended: unique id referencing the TC instance from which the user is accessing the app.
    tool_consumer_instance_name: 'Rutgers University', // * recomended: plain text user visible field with the name of the school
    tool_consumer_instance_url: 'http://sakai.rutgers.edu', // optional: URL for the consumer instance
    tool_consumer_instance_contact_emai: 'sysAdmin@rutgers.edu', // * recomended: email for the TC admin

    custom_key_goes_here: 'custom value here', // optional: a lowercase, underscore separated naem

    lis_outcome_service_url: 'http://0.0.0.0:3030/lis', // optional: this is where LIS services would hit if they were used (they are not in this repo)
    lis_result_sourcedid: '83873872987329873264783687634', // optional: a combo of the user ID and the resource ID, used for grading
    lis_person_sourcedid: 'rutgers.edu:292832126', // optional: user id for callbacks, the : is not required, just convention
    lis_course_offering_sourcedid: 'rutgers.edu:SI182-F08', // optional: id for course offering
    lis_course_section_sourcedid: 'rutgers.edu:SI182-001-F08', // optional: id for section
    // * Check out more params at: https://www.edu-apps.org/code.html#params
};
