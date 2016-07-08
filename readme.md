# Rabbiter

## Connection
```
const manager = require('rabbiter/manager');
manager.connect(<url>).then(conn=>{}).catch(err=>{});
```

## Consumer
```
const Consumer = require('rabbiter/consumer');
class MyConsumer extends Consumer {
    constructor() {
        super('q-name');
    }

    // important naming
    onMessage(data) {
        // do stuff (noAck)
    }
}
```

## Publisher
```
const publisher = require('rabbiter/publisher');
publisher.publish('ex-name', { my: 'data' })
```