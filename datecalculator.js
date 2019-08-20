const moment = require('moment');
const prompt = require('prompt');
const datediff = require('./lib/dateCalculator');
//Numbers of day from January to December
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const inputSchema = {
    properties: {
        fromDate: {
            description: 'Key in the start Date',
            message: 'Format: dd/mm/yyyy, ex: 31/01/2018',
            pattern: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
            required: true
        },
        toDate: {
            description: 'Key in the End Date',
            message: 'Format: dd/mm/yyyy, ex: 31/01/2018',
            pattern: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/,
            required: true
        }

    }
};

prompt.start();
prompt.get(inputSchema, function (err, result) {
    console.log('\n');
    console.log('Command-line input received:');
    console.log('From Date: ' + result.fromDate)
    console.log('TO Date: ' + result.toDate)

    console.log('\n');

    console.log("Total number of days elapsed between "+ result.fromDate + " and " + result.toDate + " is " + datediff.getDifference(result.fromDate,result.toDate) + ' days.');

    //validating the result using Moment date and time Library
    datediff.validator(result.fromDate,result.toDate);
});


