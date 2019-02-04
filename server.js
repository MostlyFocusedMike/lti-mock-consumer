const Hapi = require('hapi');
const Path = require('path');


const serverConfig = {
    host: '0.0.0.0',
    port: 3030,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'lib/public'),
        },
    },
};

const server = new Hapi.Server(serverConfig);

const plugins = [
    require('inert'),
];

const launch = async () => {
    await server.register(plugins);

    server.route([
        require('./lib/routes/static'),
    ]);

    try {
        await server.start();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Server running at: ', server.info.uri);
};

launch();
