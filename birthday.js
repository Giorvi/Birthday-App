var button = document.getElementById('How old am I');
button.addEventListener('click' () => {

    function bithday() {
        var currentDate = new Date()
        var age = Math.floor((currentDate - this.birthdate) / 31536000000);
        return age;
    }

}
