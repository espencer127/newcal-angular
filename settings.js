// Sample CalendarAPI settings
const SERVICE_ACCT_ID = 'newcal-angular@model-framing-216214.iam.gserviceaccount.com';
//const KEYFILE = 'your-google-api-keyfile.pem';				//path to pem key
const key = require('./googleapi-key.json').private_key;

const TIMEZONE = 'UTC-05:00';
const CALENDAR_ID = {
	'primary': 'evanispencer@gmail.com',
	'calendar-1': 'nmoogdmfcnoe16m5l5enuauhvc@group.calendar.google.com',
	
};

module.exports.serviceAcctId = SERVICE_ACCT_ID;
//module.exports.keyFile = KEYFILE;
module.exports.key = key;
module.exports.timezone = TIMEZONE;
module.exports.calendarId = CALENDAR_ID;

// Example for using json keys
// var key = require('./googleapi-key.json').private_key;
// module.exports.key = key;
