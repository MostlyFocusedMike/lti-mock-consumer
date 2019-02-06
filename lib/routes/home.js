const ltiData = require('../lti');

module.exports = {
    method: 'GET',
    path: '/',
    options: {
        handler: async (request, h) => {
            // we're just sending the lti data to our rendered view
            return h.view('index', ltiData);
        },
    },
};
