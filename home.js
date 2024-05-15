// Get the login popup
var loginPopup = document.getElementById("loginPopup");

// Get the login button that opens the popup
var loginBtn = document.getElementById("loginBtn");

// When the user clicks the login button, show the popup
loginBtn.onclick = function() {
  loginPopup.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
function closePopup() {
  loginPopup.style.display = "none";
}
