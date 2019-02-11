const Hapi = require('hapi');
const Path = require('path');

const serverConfig = {
    host: '0.0.0.0',
    port: 3030,
};

const server = new Hapi.Server(serverConfig);

const startServer = async () => {
    // load templating plugin
    await server.register(require('vision'));

    // configure templating plugin
    server.views({
        engines: {
            html: require('handlebars'),
        },
        relativeTo: Path.join(__dirname, 'lib/templates'),
        path: '.',
        isCached: false,
    });

    // load all routes
    server.route([
        require('./lib/routes/home'),
        require('./lib/routes/return'),
    ]);

    try {
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Server running at: ', server.info.uri);
};

startServer();
