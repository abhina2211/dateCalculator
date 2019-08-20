
const moment = require('moment');
const prompt = require('prompt');
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//function to extract date, month and year component from the given dates
function splitDate(dt)
{
    let Day,Month,Year,numDays;
    [Day, Month, Year] = dt.split('/').map(num => parseInt(num, 10));
    var dateArray = new Array(3);
    dateArray[0]=Day;
    dateArray[1]=Month;
    dateArray[2]=Year;

    return dateArray;
}
//number of leap years before the given date
function countLeapYears(dtArray)
{
    let years = dtArray[2];
    let leapdt = dtArray[0];
    let leapmonth = dtArray[1];
    //checking if the current yea is to be considered whether to check it for leap year or not
    dtArray[1]<=2 ? years =years-1 : years;
    //the below formula will decide whether a year is a leap year or not.
    //1. Year must be a multiple of 4 and 400
    //2. should not be a multiple of 100
    return parseInt((years/4 - years/100 + years/400));
}
//this is the core function which will calculate the difference between the given dates
function getDifference(fromDate,toDate){
    let dt1 = splitDate(fromDate);
    let dt2 = splitDate(toDate);
    //start counting the days using the year and date
    let n1 = dt1[2] * 365 + dt1[0];
    //console.log(' 1. value of n1 is: ' + n1);
    let n2 = dt2[2] * 365 + dt2[0];
    //console.log('2. value of n2 is: ' + n2);
    //add days for month in the given date
    for (let i=0; i<=(dt1[1]-1);i++){
        n1+=daysInMonth[i];
        //console.log(n1)
    }

    for (let x=0; x<=(dt2[1]-1);x++){
        n2+=daysInMonth[x];
        //console.log(n1)
    }
    //adding the day for every leap year for both from date and to date
    n1 += countLeapYears(splitDate(fromDate));
    n2 += countLeapYears(splitDate(toDate));
    //this will give us the number of days between two dates.
    // Since we not considering partial days we will be reducing 1 day from the result.
    return numDays=Math.abs((n2-n1))-1;

}
//using the moment library to validate the result.
function validator(fromDatevalid,toDatevalid){
    let fromDateValidate = moment(fromDatevalid, "DD/MM/YYYY").unix();
    let toDateValidate = moment(toDatevalid, "DD/MM/YYYY").subtract(1, 'day').unix();
    console.log('Validation: ' + (((toDateValidate-fromDateValidate)/60/60/24)));
}

module.exports = {
    getDifference,
    validator
}