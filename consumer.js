'use strict';
const manager = require('./manager');

class Consumer {
	constructor(q) {
		this.q = q;
	}

	start() {
		manager.connect().then(conn => {
			conn.createChannel().then(ch => {
				return ch.consume(this.q, msg => {
					var data = JSON.parse(msg.content);
					try {
						this.onMessage(data);
						ch.ack(msg);
					} catch(err) {
						ch.nack(msg, false, false);
					}
				});
			});
		})
	}
}

module.exports = Consumer;