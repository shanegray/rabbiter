'use strict';
const rabbit = require('amqplib');
var connection;

module.exports = {
	connect: function (url) {
		if(connection) {
			return new Promise((res, rej) => {
				res(connection);
			});
		}

		return new Promise((res, rej) => {
			rabbit
				.connect(url)
				.then(conn => {
					process.once('SIGINT', () => conn.close());
					connection = conn;
					return res(conn);
				})
				.catch(err => {
					return rej(err);
				});
		});
	},
	connection: connection
}
