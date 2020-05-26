const moment = require('moment');
const now = new Date();


const formatedData = moment(now).format("LL");
document.body.innerText = formatedData;