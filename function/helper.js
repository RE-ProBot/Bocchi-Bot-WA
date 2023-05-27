const getFormattedDate = (timestamp) => {
    var date = new Date(timestamp);

    var year  = date.getFullYear();
    var month = date.getMonth() + 1;
    var day   = date.getDate();
    var hour  = date.getHours();
    var min   = date.getMinutes();
    var sec   = date.getSeconds();

    //year      = (year  < 10 ? "0" : "") + year;
    month     = (month < 10 ? "0" : "") + month;
    day       = (day   < 10 ? "0" : "") + day;
    hour      = (hour  < 10 ? "0" : "") + hour;
    min       = (min   < 10 ? "0" : "") + min;
    sec       = (sec   < 10 ? "0" : "") + sec;

    var str = "Afk seit dem " + day + "." + month + "." + year + " um " + hour + ":" + min + "Uhr";
    return str;
}

//time:'21/04/21 21:21:13'
const getFormattedDateDB = (timestamp) => {
    var date = new Date(timestamp);

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;

    var str = (date.getFullYear() % 100) + "/" + month + "/" + day + " " +  hour + ":" + min + ":" + sec;

    /*alert(str);*/

    return str;
}

//time: '1627532061584'
function getTimestamp(dateString) {
    var timestamp = (new Date(dateString + ' GMT+02:00').getTime());
    return timestamp;
}

module.exports = {
    getFormattedDate,
    getFormattedDateDB,
    getTimestamp
}