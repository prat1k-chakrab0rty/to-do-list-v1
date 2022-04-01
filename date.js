module.exports.getDate=getDate;
function getDate() {
    const d = new Date();
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    const day=d.toLocaleDateString("en-US",options);
    return day;
}
module.exports.getDay=getDay;
function getDay(){
const d = new Date();
const dayInNumeric = d.getDay();
var day="";
switch (dayInNumeric) {
    case 0:
        day = "Sunday";
        break;
    case 1:

        day = "Monday";
        break;
    case 2:
        day = "Tuesday";

        break;
    case 3:

        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";

        break;
    case 5:
        day = "Friday";

        break;
    case 6:
        day = "Saturday";

        break;

    default:
        console.log("ERROR!!!");
        break;
}
return day;
}