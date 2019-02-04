function init() {
    const key = '12345';
    const secret = 'secret';
    const path = 'https://lti.tools/saltire/tp';

    const launchData = {
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
        tool_consumer_instance_description: 'Princton University (LMSng)', // optional: description of the instance from which the user is accessing the app.

        /* OAuth Params */
    };

    const form = document.forms[0];
    form.setAttribute('action', path);

    Object.keys(launchData).forEach((param) => {
        const div = document.createElement('div');
        div.class = 'input-holder';
        const label = document.createElement('label');
        label.setAttribute('for', param);
        label.textContent = param;

        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', param);
        input.setAttribute('value', launchData[param]);
        div.appendChild(label);
        div.appendChild(input);
        form.appendChild(div);
    });

    const submitBtn = document.createElement('input');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('value', 'Submit');
    form.appendChild(submitBtn);
}

document.addEventListener('DOMContentLoaded', init);
