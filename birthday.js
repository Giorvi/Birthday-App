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

function checkFormat() {
    var format = document.getElementById("Birthday").value;
    var check1 = format.substring(2, 3);
    var check2 = format.substring(5, 6);
    if ((check1 == "/") && (check2 == "/") && (format.length == 10)) {

            return "You are " + getAge() + " years old and there are " +
birthdayCountDown() + " days till your birthday";

    } else {
        return "Sorry, but you did not enter a date in the correct format of mm/dd/yyyy.";
    }
}

