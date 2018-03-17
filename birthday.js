// Button
var button = document.getElementById("submitBirthday");
button.addEventListener("click", () => {
    document.getElementById('output').textContent = checkFormat();
});

function getAge() {
    var today = new Date(),
        birthday = document.getElementById("Birthday").value,
        birthdate = new Date(birthday),
        age = Math.floor((today - birthdate) / (365 * 24 * 60 * 60 * 1000));

    return age;
}

// getAge function.
// Takes Birtdate input and returns how old the prson is based on the input.
function birthdayCountDown() {
    var today = new Date,
        nextyear = today.getYear() + 1,
        birthday = document.getElementById("Birthday").value,
        birthdate = new Date(birthday),
        nextBirthday = new Date(birthdate.setFullYear(today.getFullYear()));
    if (today - nextBirthday > 0) {
        var nextBirthday = nextBirthday.setFullYear(today.getFullYear() + 1)

    }
    var daysuntilnextbirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24))

    return daysuntilnextbirthday;
}

// birthdayCountDown funtion.
// based on the input by the user return a count down untill their next birthday.
function getSign(birthday) {
    var day = birthday.getDate();
    var month = birthday.getMonth() + 1;
    var msg = "";

    if ((month == 1 && day <= 19) || (month == 12 && day >= 22)) {
        msg = "Capricorn";
    } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        msg = "Aquarius";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        msg = "Pisces";
    } else if ((month == 3 && day >=21) || (month == 4 && day <= 19)) {
        msg = "Aries";
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        msg = "Taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        msg = "Gemini";
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        msg = "Cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        msg = "Leo";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        msg = "Virgo";
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        msg = "Libra";
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 22)) {
        return "Scorpio";
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        msg = "Sagittarius";
    }
    return msg;
}

// checkFomat function
/*this funtion makes sure that the inout from the user is in the correct date format.
The funtion checks for certain permaiter and then returns on of the two things. It can return getAge,
birthdayCountDown, and get sign or you didn't enter the correct format*/
function checkFormat() {
    var format = document.getElementById("Birthday").value;
    var check1 = format.substring(2, 3);
    var check2 = format.substring(5, 6);
    if ((check1 == "/") && (check2 == "/") && (format.length == 10)) {
        var birthday = new Date(format);

        return "You are " + getAge() + " years old and there are " +
            birthdayCountDown() + " days till your birthday" + " and your sign is " + getSign(birthday);

    } else {
        return "Sorry, but you did not enter a date in the correct format of mm/dd/yyyy.";
    }
}
