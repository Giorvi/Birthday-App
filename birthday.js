var button = document.getElementById('How old am I');
button.addEventListener('click' () => {

            function getBithday() {
                var currentDate = new Date()
                var age = Math.floor((currentDate - this.birthdate) / 31536000000);
                return age;
            }

        function getSign(){

}
