const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('DOS', function listener (data) {
    console.log(data);
});

module.exports = class DosDetector {
    constructor(timeValue) {
        this.urls = new Map();
        this.TIME_BETWEEN_CALLS = timeValue;
    }

    addUrl = (url) => {
        const time = new Date().getTime();
        if (this.urls.has(url)) {
            const deltaTime = time - this.urls.get(url);
            if (deltaTime < this.TIME_BETWEEN_CALLS) {
                myEmitter.emit('DOS', {url,timeBetweenCalls: deltaTime});}
        }
        this.urls.set(url, time);
    };
};




