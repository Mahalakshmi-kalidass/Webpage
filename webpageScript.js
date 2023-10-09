// JavaScript source code
window.onload = function () {
    let uname = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");

    let nameError = document.getElementById("emptyErrorName");
    let emailError = document.getElementById("emptyErrorEmail");
    let phoneError = document.getElementById("emptyErrorPhone");
    uname.addEventListener(
        "focusout", function () {
            if (uname.value === '') {
                nameError.style.display = "inline-block";

            }
            else {
                nameError.style.display = "none";
            }
        }
    );
    email.addEventListener(
        "focusout", function () {
            if (email.value === '') {
                emailError.style.display = "inline-block";

            }
            else {
                emailError.style.display = "none";
            }
        }
    );
    phone.addEventListener(
        "focusout", function () {
            if (phone.value === '') {
                phoneError.style.display = "inline-block";

            }
            else {
                phoneError.style.display = "none";
            }
        }
    );



}
function valueRequired(selector, errorelement) {
    if (selector.value === '') {
        errorelement.style.display = "inline-block";

    }
    else {
        errorelement.style.display = "none";
    }
}