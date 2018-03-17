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
