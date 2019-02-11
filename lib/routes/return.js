module.exports = {
    method: 'GET',
    path: '/return',
    options: {
        handler: async (request, h) => {
            const params = request.query;
            return {
                msg: "tool successfully went to and now you're back in the LMS",
                params,
            };
        },
    },
};
