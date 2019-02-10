const restify = require('restify');
const mongoose = require('mongoose');
const rjwt = require('restify-jwt-community');
const config = require('./config');

const server = restify.createServer();

// Middleware
server.use(restify.plugins.bodyParser());

// Protect Routes
server.use(rjwt({ secret: config.JWT_SECRET }).unless({ path: ['/auth'] }));

// Server
server.listen(config.PORT, () => {
	mongoose.connect(config.MONGO_URI, {useNewUrlParser: true});
});

// Database
const db = mongoose.connection;
db.on('error', (err) => {console.log(e)});
db.once('open', () => {
	require('./routes/customers')(server);
	require('./routes/users')(server);
	console.log(`Server started on port ${config.PORT}`);
})