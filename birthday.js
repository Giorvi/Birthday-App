var button = document.getElementById('Submit');
button.addEventListener('click' () => {



            function getSign() {
                var sign = new Date(birthday),
                birthday = document.getElementById("birthdayinout").value;
                    if ((sign.getMonth() == 2 && sign.getDate() >= 21 || sign.getMonth() == 3 && sign.getDate() <= 19)) {
                        return "Aries";

                    } else
                if ((sign.getMonth() == 3 && sign.getDate() >= 20 || sign.getMonth() == 4 && sign.getDate() <= 20)) {
                    return "Taurus";

                } else if ((sign.getMonth() == 4 && sign.getDate() >= 21 || sign.getMonth() == 5 && sign.getDate() <= 20)) {
                    return "Gemini";

                } else if ((sign.getMonth() == 5 && sign.getDate() >= 21 || sign.getMonth() == 6 && sign.getDate() <= 22)) {
                    return "Cancer";

                } else if ((sign.getMonth() == 6 && sign.getDate() >= 23 || sign.getMonth() == 7 && sign.getDate() <= 22)) {
                    return "Leo";

                } else if ((sign.getMonth() == 7 && sign.getDate() >= 23 || sign.getMonth() == 8 && sign.getDate() <= 22)) {
                    return "Virgo";

                } else if ((sign.getMonth() == 8 && sign.getDate() >= 23 || sign.getMonth() == 9 && sign.getDate() <= 22)) {
                    return "Libra";

                } else if ((sign.getMonth() == 9 && sign.getDate() >= 23 || sign.getMonth() == 10 && sign.getDate() <= 21)) {
                    return "Scorpio";
                } else if ((sign.getMonth() == 10 && sign.getDate() >= 22 || sign.getMonth() == 11 && sign.getDate() <= 21)) {
                    return "Sagittarius";

                } else if ((sign.getMonth() == 11 && sign.getDate() >= 22 || sign.getMonth() == 0 && sign.getDate() <= 19)) {
                    return "Capricorn";

                } else if ((sign.getMonth() == 0 && sign.getDate() >= 20 || sign.getMonth() == 1 && sign.getDate() <= 18)) {
                    return "Aquarius";


                } else if ((sign.getMonth() == 1 && sign.getDate() >= 19 || sign.getMonth() == 2 && sign.getDate() <= 20)) {
                    return "Pisces";



                }
            }
    function birthdayCountDown(date) {
    var today = new Date();
    var myBirthday = new Date(date);
    myBirthday.setFullYear(today.getFullYear());
    if (today.getTime() > myBirthday.getTime()) {
        myBirthday.setFullYear(today.getFullYear() + 1);
    }
    var diff = myBirthday.getTime() - today.getTime();
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return ("My Birthday is in " + days+ " days :(");
}

function superiorGreeting(msg) {
    var d = new Date();
    var hour = d.getHours();
    var day = d.getDay();
    var msg = "";
    if (hour < 12) {
        if (day == 0 || day == 6) {
            msg = "Go back to sleep! Its the weekend!";
        } else if (day == 1) {
            msg = "Ugh, its a Monday morning!";
        } else if (day == 2 || day == 3 || day == 4) {
            msg = "Good Morning";
        } else if (day == 5) {
            msg = "Its finally Friday!! Goodmorning :)";
        }
    } else if (hour > 17 ) {
        msg = "Good Evening"
     } else if (day == 6){
         msg = "Enjoy you evening...tomorrow is Monday"
    }
    else if (hour < 15 ) {
        msg = "Good Day!"
    }

    return msg;
}

