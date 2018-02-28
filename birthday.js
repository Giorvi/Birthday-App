var button = document.getElementById("submitBirthday");
button.addEventListener("click", () => {
    document.getElementById('output').textContent = checkFormat();
});

function getAge() {
    var today = new Date(),
        birthday = document.getElementById("Birthday").value,
        birthdate = new Date(birthday),
        age = Math.floor((today - birthdate) / (365 * 24 * 60 * 60 * 1000));

    return "You're are" + age + " years old";


}

function checkFormat() {
    var format = document.getElementById("Birthday").value;
    var check1 = format.substring(2, 3);
    var check2 = format.substring(5, 6);
    if ((check1 == "/") && (check2 == "/") && (format.length == 10)) {

            return getAge();

    } else {
        return "Sorry, but you did not enter a date in the correct format of mm/dd/yyyy.";
    }
}
