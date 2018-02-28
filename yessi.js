var button = document.getElementById("button2");
button.addEventListener("click", () => {
    document.getElementById('output').textContent = birthdayCountDown()

});

function birthdayCountDown() {
    var today = new Date,
        nextyear = today.getYear() + 1,
        birthday = document.getElementById("birthdayinput").value,
        birthdate = new Date(birthday),
        nextBirthday = new Date(birthdate.setFullYear(today.getFullYear()));
    if (today - nextBirthday > 0){
        var nextBirthday = nextBirthday.setFullYear(today.getFullYear()+ 1)

    }
var daysuntilnextbirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24))

return daysuntilnextbirthday;
}
