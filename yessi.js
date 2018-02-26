var button = document.getElementById("button2");
button.addEventListener("click", () => {
    document.getElementById('output').textContent = birthdayCountDown()

});

function birthdayCountDown() {
    var today = new Date,
        Nextyear = today.getYear() + 1,
        birthday = document.getElementById(("birthdayinput")).value,
        birthdate = new Date(birthday),
        nextBirthday = new Date(birthdate.setFullYear(today.getFullYear()));
var daysuntilnextbirthday = Math.ceil((nextBirthday - today) / (24 * 60 * 60 * 1000));

return daysuntilnextbirthday;
}
