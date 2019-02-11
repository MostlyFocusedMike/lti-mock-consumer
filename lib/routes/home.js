const oauth = require('oauth-sign'); // an oauth1 signer
const ltiParams = require('../lti_params');

module.exports = {
    method: 'GET',
    path: '/',
    options: {
        handler: async (request, h) => {
            // we're just sending the lti data to our rendered view
            const launchURL = 'https://lti.tools/saltire/tp'; // ! required: the URL of the tool provider
            const oathParams = {
                // this is one legged OAuth1
                // literally all it does is encode a signature to ensure that your params and the decoded launch params in the signature match
                oauth_callback: 'about:blank',
                oauth_consumer_key: '12345',
                oauth_version: '1.0',
                oauth_nonce: '5c58b57a1a5e2', // this SHOULD be unique id, we're faking it
                oauth_timestamp: (Math.round((new Date()).getTime() / 1000)), // we need the unix timestamp in seconds, not milliseconds
                oauth_signature_method: 'HMAC-SHA1', // * lti 1.x seems to prefer this algo
            };
            const launchParams = Object.assign({}, ltiParams, oathParams);

            // Basic LTI uses OAuth to sign requests
            // * OAuth Core 1.0 spec: http://oauth.net/core/1.0/
            // ! the mock Tool provider tester expects the secret to just be 'secret'
            launchParams.oauth_signature = oauth.hmacsign('POST', launchURL, launchParams, 'secret');

            return h.view('index', {
                launchParams,
                launchURL,
            });
        },
    },
};
