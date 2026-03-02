let username = localStorage.getItem("username");
let email = localStorage.getItem("email");
let password = localStorage.getItem("password");
document.getElementById("sign-in").addEventListener("click", function() {
    let inputEmail = document.getElementById("email").value;
    let inputPassword = document.getElementById("password").value;
    let inputUsername = document.getElementById("username").value;
    if(inputEmail === "" || inputPassword === "" || inputUsername === "") {
        alert("Please fill in all fields.");
    } else if(inputEmail === email && inputPassword === password && inputUsername === username) {
        alert("Sign in successful!");
    } else {
        alert("Invalid email, password, or username.");
    }
});