document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("newUserF").disabled = true;
    document.getElementById("extUserF").disabled = true;

    document.getElementById("newUserB").addEventListener("click", function() {
        document.getElementById("newUserF").disabled = false;
        document.getElementById("loginField").disabled = true;
    });

    document.getElementById("extUserB").addEventListener("click", function() {
        document.getElementById("extUserF").disabled = false;
        document.getElementById("loginField").disabled = true;
    });

    document.getElementById("createButton").addEventListener("click", function() {
        let username = document.getElementById("usernameN").value;
        let password = document.getElementById("passwordN").value;
        let city = document.getElementById("cityN").value;
        let state = document.getElementById("cityN").value;

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("city", city);
        localStorage.setItem("state", state);

        alert(`Welcome ${username}`);
    });

    document.getElementById("loginButton").addEventListener("click", function() {
        let username = document.getElementById("usernameE").value;
        let password = document.getElementById("passwordE").value;

        let storageUsername = localStorage.getItem("username");
        let storagePassword = localStorage.getItem("password");

        if (username == storageUsername && password == storagePassword) {
            alert(`Welcome ${storageUsername}`);
        }
        else {
            alert("Invalid username or passowrd");
        }
    });
});
