document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); 

        function isValidUsername(username) {
            var usernameRegex = /^.{8}$/;
            return usernameRegex.test(username);
        }
        
        function isValidEmail(email) {
            var emailRegex = /\S+@\S+\.\S+/;
            return emailRegex.test(email);
        }
        
        function isValidPassword(password) {
            var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
            return passwordRegex.test(password);
        }
        
        var username = document.getElementById('username').value;
        if (!isValidUsername(username)) {
            alert("Username must be 8 characters long");
            return false; 
        }
       
        var email = document.getElementById('email').value;
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address");
            return false; 
        }
        
        var password = document.getElementById('pwd').value;
        if (!isValidPassword(password)) {
            alert("Password must be 8 characters long and contain at least one uppercase letter and one special character");
            return false; 
        }
       
        var confirmPassword = document.getElementById('pwd-repeat').value;
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return false; 
        }
        
        alert("you registered successfully!");
       
        this.submit();
    });
});


