'use strict';
const manager = require('./manager');

module.exports = {
	publish: function (ex, data) {
		manager.connect().then(conn => {
			conn.createChannel().then(ch => {
				ch.publish(ex, '', new Buffer(JSON.stringify(data)));
				return ch.close();
			});
		})
	}
};