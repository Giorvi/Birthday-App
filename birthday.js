var button = document.getElementById("submitbirthday");
button.addEventListener("click", () => {
    document.getElementById('output').textContent = getAge()

});

function getAge() {
    var today = new Date(),
        birthday = document.getElementById("birthdayinput").value,
        birthdate = new Date(birthday),
        age = Math.floor((today - birthdate) / (365 * 24 * 60 * 60 * 1000));

    return "You're are" + age + "years old";
}



function getSign() {
    var sign = new Date(birthday),
        birthday = document.getElementById("birthdayinout").value;
    if ((sign.getMonth() == 2 && sign.getDate() >= 21 || sign.getMonth() == 3 && sign.getDate() <= 19)) {
        return "Aries";


        function getSign() {
            var sign = new Date(birthday),
                birthday = document.getElementById("birthdayinput").value;
            if ((sign.getMonth() == 2 && sign.getDate() >= 21 || sign.getMonth() == 3 && sign.getDate() <= 19)) {
                return "Aries";

            } else
            if ((sign.getMonth() == 3 && sign.getDate() >= 20 || sign.getMonth() == 4 && sign.getDate() <= 20)) {
                return "Taurus";

            } else if ((sign.getMonth() == 4 && sign.getDate() >= 21 || sign.getMonth() == 5 && sign.getDate() <= 20)) {
                return "Gemini";

            } else if ((sign.getMonth() == 5 && sign.getDate() >= 21 || sign.getMonth() == 6 && sign.getDate() <= 22)) {
                return "Cancer";

            } else if ((sign.getMonth() == 6 && sign.getDate() >= 23 || sign.getMonth() == 7 && sign.getDate() <= 22)) {
                return "Leo";

            } else if ((sign.getMonth() == 7 && sign.getDate() >= 23 || sign.getMonth() == 8 && sign.getDate() <= 22)) {
                return "Virgo";

            } else if ((sign.getMonth() == 8 && sign.getDate() >= 23 || sign.getMonth() == 9 && sign.getDate() <= 22)) {
                return "Libra";

            } else if ((sign.getMonth() == 9 && sign.getDate() >= 23 || sign.getMonth() == 10 && sign.getDate() <= 21)) {
                return "Scorpio";
            } else if ((sign.getMonth() == 10 && sign.getDate() >= 22 || sign.getMonth() == 11 && sign.getDate() <= 21)) {
                return "Sagittarius";

            } else if ((sign.getMonth() == 11 && sign.getDate() >= 22 || sign.getMonth() == 0 && sign.getDate() <= 19)) {
                return "Capricorn";

            } else if ((sign.getMonth() == 0 && sign.getDate() >= 20 || sign.getMonth() == 1 && sign.getDate() <= 18)) {
                return "Aquarius";


                return ("My Birthday is in " + days + " days :(");

            }

        } else if ((sign.getMonth() == 1 && sign.getDate() >= 19 || sign.getMonth() == 2 && sign.getDate() <= 20)) {
            return "Pisces";



        }
    }
}


    function birthdayCountDown(date) {
        var today = new Date();
        var myBirthday = new Date(date);
        myBirthday.setFullYear(today.getFullYear());
        if (today.getTime() > myBirthday.getTime()) {
            myBirthday.setFullYear(today.getFullYear() + 1);
        }
        var diff = myBirthday.getTime() - today.getTime();
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));

        return ("My Birthday is in " + days + " days :(");
    }







    function checkFormat(ExpiryDate) {
        var objDate = objDate;
        var mSecond = mSeconds;
        var day = day;
        var month = month;
        var year = year;

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
