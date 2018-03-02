function getSign() {
var today = new Date;
var birthday = document.getElementById("birthdayinput").value;
var birthdate = new Date(birthday);
var days = birthdate.getDate();
var month = birthdate.getMonth();


if ((month == 2 && days >= 21 || month == 3 && days <= 19)) {
    return "Aries";
} else if ((month == 3 && days >= 20 || month == 4 && days <= 20)) {
return "Taurus";

} else if ((month == 4 && days >= 21 || month == 5 && days <= 20)) {
    return "Gemini";
} else if ((month == 5 && days >= 21 || month n == 6 && days <= 22)) {
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

