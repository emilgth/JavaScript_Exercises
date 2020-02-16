const sysInfo = require('./systemInfo');
const DosDetector = require('./dosDetector');

console.log(sysInfo.sysInfo);

const detector = new DosDetector(500);
detector.addUrl("https://fullstack-2020.netlify.com/period1/day2/");
setTimeout(() => {
    detector.addUrl("https://fullstack-2020.netlify.com/period1/day2/")
}, 400);
