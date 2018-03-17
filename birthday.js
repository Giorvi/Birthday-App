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


function getSign() {
    var today = new Date;
    var birthday = document.getElementById("Birthday").value;
    var birthdate = new Date(birthday);
    var days = birthdate.getDate();
    var month = birthdate.getMonth();


    if ((month == 2 && days >= 21 || month == 3 && days <= 19)) {
        return "Aries";
    } else if ((month == 3 && days >= 20 || month == 4 && days <= 20)) {
        return "Taurus";

    } else if ((month == 4 && days >= 21 || month == 5 && days <= 20)) {
        return "Gemini";
    } else if ((month == 5 && days >= 21 || month == 6 && days <= 22)) {
        return "Cancer";

    } else if ((month == 6 && days >= 23 || month == 7 && days <= 22)) {
        return "Leo";

    } else if ((month == 7 && days >= 23 || month == 8 && days <= 22)) {
        return "Virgo";
    } else if ((month == 8 && days >= 23 || month == 9 && days <= 22)) {
        return "Libra";

    } else if ((month == 9 && days >= 23 || month == 10 && days <= 21)) {
        return "Scorpio";
    } else if ((month == 10 && days >= 22 || month == 11 && days <= 21)) {
        return "Sagittarius";

    } else if ((month == 11 && days >= 22 || month == 0 && days <= 19)) {
        return "Capricorn";

    } else if ((month == 0 && days >= 20 || month == 1 && days <= 18)) {
        return "Aquarius";


    } else if ((month == 1 && days >= 19 || month == 2 && days <= 20)) {
        return "Pisces";

    }
}

function checkFormat() {
    var format = document.getElementById("Birthday").value;
    var check1 = format.substring(2, 3);
    var check2 = format.substring(5, 6);
    if ((check1 == "/") && (check2 == "/") && (format.length == 10)) {

        return "You are " + getAge() + " years old and there are " +
            birthdayCountDown() + " days till your birthday." + "Your astrological sign is" + getSign;

    } else {
        return "Sorry, but you did not enter a date in the correct format of mm/dd/yyyy.";
    }
}
