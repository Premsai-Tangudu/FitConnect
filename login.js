document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('pwd').value;

        if (username.trim() === '' || password.trim() === '') {
            alert("Please enter both username and password");
            return;
        }

       
        if (username !== "example" || password !== "password") {
            alert("Username or password incorrect! Please try again.");
            return;
        }

        
        window.location.href = 'classes.html';
    });
});
