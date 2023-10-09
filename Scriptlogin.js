// JavaScript source code
console.log("hi");
window.onload = function () {
    var emailInput = document.getElementById('username');
    let error = document.getElementById("emailerror");

    let passInput = document.getElementById("password");
    let passError = document.getElementById("passError");

    let submit = document.getElementById("submit");
    emailInput.addEventListener('focusout', function () {
        var email = emailInput.value;

        // Perform email validation
        if (!validateEmail(email)) {
            error.innerText = "Please enter a valid email address";
            error.style.display = "inline-block";
        }
        else {
            error.style.display = "none";
        }
       
        
    });
   
    passInput.addEventListener(
        "focusout", function () {
            if (passInput.value === '') {
                passError.innerText = "Please enter a valid Password";
                passError.style.display = "inline-block";
            }
            else {
                passError.style.display = "none";
            }
        }

    );

    submit.addEventListener(
        "submit", function () {
            validateForm();
            window.open("webpage.html");
        }
    );

}


function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm( ){
    let email = document.getElementById('username');
    let pass = document.getElementById("password");
    console.log("hi");
    if (email.value === '' || pass.value === '') {
        return false;
    }
    return true;
}


