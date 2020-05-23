const moment = require('moment');
const now = new Date();
console.log(now);

const formatedData = moment(now).format("LL");

console.log(formatedData);

document.body.innerText = formatedData;