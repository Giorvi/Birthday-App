var button = document.getElementById("button3");
button.addEventListener("click", () => {
    document.getElementById('output').textContent = getSign()

});

function getSign(bday) {
    var today = new Date(bday);
    var days = birthdate.getDate() + 1;
    var month = birthdate.getMonth();


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
}

    var input = document.getElementById("birthdayinput").value;
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

