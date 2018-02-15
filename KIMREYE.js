
        function checkFormat(ExpiryDate) {
    var objDate= objDate;
      var   mSecond = mSeconds;
       var day= day;
       var  month= month;
       var year= year;

    if (ExpiryDate.length !== 10) {
        return "Sorry, but you did not enter a date in the correct format.";

    }

    if (ExpiryDate.substring(2, 3) !== '/' || ExpiryDate.substring(5, 6) !== '/') {
        return "Sorry, but you did not enter a date in the correct format.";
    }

    month = ExpiryDate.substring(0, 2) - 1;
    day = ExpiryDate.substring(3, 5) - 0;
    year = ExpiryDate.substring(6, 10) - 0;

    if (year < 1000 || year > 3000) {
        return "Sorry, but you did not enter a date in the correct format.";
    }

    mSeconds = (new Date(year, month, day)).getTime();

    objDate = new Date();
    objDate.setTime(mSeconds);

    if (objDate.getFullYear() !== year ||
        objDate.getMonth() !== month ||
        objDate.getDate() !== day) {
        return "Sorry, but you did not enter a date in the correct format.";
    }
    return true;
        }

