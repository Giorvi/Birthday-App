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
    if (today - nextBirthday > 0){
        var nextBirthday = nextBirthday.setFullYear(today.getFullYear()+ 1)

    }
var daysuntilnextbirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24))

return daysuntilnextbirthday;
}

function getSign() {
    var birth = new Date();
    var day = birth.getDate() ;
    var month = birth.getMonth() +2;


    if ((month == 1 && day <= 19) || (month == 12 && day >= 22)) {
           return "Capricorn";
        } else if ((month == 1 && day <= 20) || (month == 2 && day >= 18)) {
            return "Aquarius";
        } else if ((month == 2 && day <= 19) || (month == 3 && day >= 20)) {
            return "Pisces";
        } else if ((month == 3 && day <= 21) || (month == 4 && day >= 19)) {
            return "Aries";
        } else if ((month == 4 && day <= 20) || (month == 5 && day >= 20)) {
            return "Taurus";
        } else if ((month == 5 && day <= 21) || (month == 6 && day >= 20)) {
            return "Gemini";
        } else if ((month == 6 && day <= 21) || (month == 7 && day >= 22)) {
            return "Cancer";
        } else if ((month == 7 && day <= 23) || (month == 8 && day >= 22)) {
            return "Leo";
        } else if ((month == 8 && day <= 23) || (month == 9 && day >= 22)) {
            return "Virgo";
        } else if ((month == 9 && day <= 23) || (month == 10 && day >= 22)) {
            return "Libra";
        } else if ((month == 10 && day <= 23) || (month == 11 && day >= 22)) {
            return "Scorpio";
        } else if ((month == 11 && day <= 22) || (month == 12 && day >= 21)) {
            return "Sagittarius";
        }

    var input = document.getElementById("Birthday").value;
    var result = getSign(input);
    if (result == "Capricorn") {
        document.getElementById('sign').textContent = "Your sign Capricorn";
    } else if (result == "Aquarius") {
        document.getElementById('sign').textContent = "Your sign Aquarius";
    } else if (result == "Pisces") {
        document.getElementById('sign').textContent = "Your sign Pisces";
    } else if (result == "Aries") {
        document.getElementById('sign').textContent = "Your sign Aries";
    } else if (result == "Taurus") {
        document.getElementById('sign').textContent = "Your sign Taurus";
    } else if (result == "Gemini") {
        document.getElementById('sign').textContent = "Your sign Gemini";
    } else if (result == "Cancer") {
        document.getElementById('sign').textContent = "Your sign Cancer";
    } else if (result == "Leo") {
        document.getElementById('sign').textContent = "Your sign Leo";
    } else if (result == "Virgo") {
        document.getElementById('sign').textContent = "Your sign Virgo";
    } else if (result == "Libra") {
        document.getElementById('sign').textContent = "Your sign Libra";
    } else if (result == "Scorpio") {
        document.getElementById('sign').textContent = "Your sign Scorpio";
     } else if (result == "Sagittarius") {
        document.getElementById('sign').textContent = "Your sign Scorpio";
     }
}


function checkFormat() {
    var format = document.getElementById("Birthday").value;
    var check1 = format.substring(2, 3);
    var check2 = format.substring(5, 6);
    if ((check1 == "/") && (check2 == "/") && (format.length == 10)) {

            return "You are " + getAge() + " years old and there are " +
birthdayCountDown() + " days till your birthday" + " and your sign is"+ getSign() ;

    } else {
        return "Sorry, but you did not enter a date in the correct format of mm/dd/yyyy.";
    }
}

