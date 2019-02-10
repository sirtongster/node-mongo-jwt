module.exports = {
	ENV: process.env.NODE_ENV || 'development',
	PORT: process.env.PORT || 3000,
	URL: process.env.BASE_URL || 'http://localhost:3000',
	MONGO_URI: process.env.MONGODB_URI || 'mongodb://GC123456:GC123456!@ds013192.mlab.com:13192/customer_api',
	JWT_SECRET: process.env.JWT_SECRET || 'secret1'
}