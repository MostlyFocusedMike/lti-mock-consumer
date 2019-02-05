const crypto = require('crypto');

module.exports = {
    method: 'GET',
    path: '/',
    options: {
        handler: async (request, h) => {
            const launchURL = 'https://lti.tools/saltire/tp';
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
                tool_consumer_instance_description: 'Princton University LMS', // optional: description of the instance from which the user is accessing the app.

                /* OAuth data */
                oauth_callback: 'about:blank',
                oauth_consumer_key: '12345',
                oauth_version: '1.0',
                oauth_nonce: '5c58b57a1a5e2', // this SHOULD be unique id, we're faking it here
                oauth_timestamp: Math.round((new Date()).getTime() / 1000), // '1549386076'
                oauth_signature_method: 'HMAC-SHA1',
            };

            // Basic LTI uses OAuth to sign requests
            // * OAuth Core 1.0 spec: http://oauth.net/core/1.0/
            const launchParams = [];
            Object.keys(launchData).sort().forEach((k) => { // OAuth requires params to be alphabetically sorted
                launchParams.push(`${k}=${encodeURIComponent(launchData[k])}`);
            });
            const baseString = `POST&${encodeURIComponent(launchURL)}&${encodeURIComponent(launchParams.join('&'))}`;

            const secret = `${encodeURIComponent('secret')}&`;
            // https://stackoverflow.com/questions/36924021/hash-hmac-equivalent-in-node-js
            const hmac = crypto.createHmac('sha1', secret).update(baseString).digest();
            const signature = Buffer.from(hmac).toString('base64');

            // $signature = base64_encode(hash_hmac("sha1", $base_string, $secret, true));


            const context = {
                launchData,
                baseString,
                launchURL,
                signature,
                goal: 'X4GMmS24Viq3x3zRC5PwBqNTCeE=',
            };
            return h.view('index', context);
        },
    },
};
