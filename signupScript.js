// JavaScript source code
window.onload = function () {
    let firstname = document.getElementById("fname");
    let errorfname = document.getElementById("errorFname");
   

    let lastname = document.getElementById("lname");
    let errorlname = document.getElementById("errorLname");
    

    let dob = document.getElementById("dob");
    let errordob = document.getElementById("errordob");
    
   
    const age = document.getElementById("age");

    const radiobuttons = document.querySelectorAll('input[type="radio"][name="Gender"]');

    const email = document.getElementById("username");
    const errorEmail = document.getElementById("errorEmail");
   
    const address = document.getElementById("address");
    const errorAdd = document.getElementById("errorAdd");


    const state = document.getElementById("state");
    const city = document.getElementById("city");
    const statesandcities = {
        AndhraPradesh: ["Visakhapatnam", "Vijayawada", "Guntur", "Tirupati"],
        Assam: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat"],
        Bihar: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur"],
        Chhattisgarh: ["Raipur", "Bhilai", "Bilaspur", "Korba"],
        Goa: ["Panaji", "Margao", "Vasco da Gama", "Mapusa"],
        Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
        Haryana: ["Chandigarh", "Faridabad", "Gurugram", "Hisar"],
        HimachalPradesh: ["Shimla", "Mandi", "Solan", "Kullu"],
        Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
        Karnataka: ["Bengaluru", "Mysuru", "Hubballi", "Mangaluru"],
        Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"],
        MadhyaPradesh: ["Bhopal", "Indore", "Jabalpur", "Gwalior"],
        Maharashtra: ["Mumbai", "Pune", "Nagpur", "Thane"],
        Manipur: ["Imphal", "Thoubal", "Bishnupur", "Churachandpur"],
        Meghalaya: ["Shillong", "Tura", "Nongpoh", "Jowai"],
        Mizoram: ["Aizawl", "Lunglei", "Champhai", "Saiha"],
        Nagaland: ["Kohima", "Dimapur", "Mokokchung", "Tuensang"],
        Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Puri"],
        Punjab: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"],
        Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
        Sikkim: ["Gangtok", "Namchi", "Gyalshing", "Rangpo"],
        TamilNadu: ["Chennai", "Coimbatore", "Madurai", "Salem"],
        Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
        Tripura: ["Agartala", "Udaipur", "Dharmanagar", "Kailasahar"],
        UttarPradesh: ["Lucknow", "Kanpur", "Agra", "Varanasi"],
        Uttarakhand: ["Dehradun", "Haridwar", "Roorkee", "Haldwani"],
        WestBengal: ["Kolkata", "Howrah", "Durgapur", "Siliguri"]
    }

    const uname = document.getElementById("uname");
    const errorUname = document.getElementById("errorUname");

    const password = document.getElementById("pwd");
    const confPassword = document.getElementById("cpwd");
    const errorPassword = document.getElementById("errorPwd");
    const errorConPassword = document.getElementById("errorCpwd");

    const signup = document.getElementById("signup");
    const requiredError = document.getElementById("errorField");
    //show error when focusout if first name contains numb
    firstname.addEventListener(
        "focusout", function () {
            if (firstname.value !== '') {
                if (numberInName(firstname.value)) {
                    errorfname.innerText = "First Name should not contain numbers or symbols";
                    errorfname.style.display = "inline-block";

                }
                else {
                  errorfname.style.display = "none";
                }
            }
        }
    );
    //show error when focusout if first name is empty
    firstname.addEventListener(
        "input", function () {
            if (firstname.value === '') {
                errorfname.innerText = "*A value is required";
                errorfname.style.display = "inline-block";
            }
            else {
                errorfname.style.display = "none";
            }
        }
    )

    //show error when focusout if last name contains number
    lastname.addEventListener(
        "focusout", function () {
            if (lastname.value !== '') {
                if (numberInName(lastname.value)) {
                    errorlname.innerText = "*Last name should not contain numbers or symbols";
                    errorlname.style.display = "inline-block";

                }
                else {
                    errorlname.style.display = "none";
                }
            }
        }
    );

    //show error when focusout if last name is empty
    lastname.addEventListener(
        "input", function () {
            if (lastname.value === '') {
                errorlname.innerText = "*A value is Required";
                errorlname.style.display = "inline-block";
            }
            else {
                errorlname.style.display = "none";
            }
        }
    )

    //show error when focusout if dob is empty ||  if dob is current date or future date
    dob.addEventListener(
        "focusout", function () {
            console.log(dob.value);
           
            if (dob.value === '') {

                errordob.innerText = "*A value is Required";
                errordob.style.display = "inline-block";

            }
            else if (isTodayOrFutureDate(dob.value)) {
                errordob.innerText = "*DOB cannot be present date or future date"
                errordob.style.display = "inline-block";
            }
            else {
                errordob.style.display = "none";
                if (calculateAge(dob.value) < 0) {
                    age.value = "";
                }
                else {
                    age.value = calculateAge(dob.value);
                }
            }
        }
    )
    
    //show error when focusout if email is empty
    email.addEventListener(
        "focusout", function () {
            if (email.value === '') {
                errorEmail.innerText = "* A value is required";
               errorEmail.style.display = "inline-block";
                
            }
            else if (!validateEmail(email.value)) {
                errorEmail.innerText = "* Enter a valid Email";
                errorEmail.style.display = "inline-block";
            }
            else {
                errorEmail.style.display = "none";

            }

        }
    );
    

   

    radiobuttons.forEach(function (rbtn) {
        // Attach event listeners to each radio button
        rbtn.addEventListener('click', function () {
            radiobuttons.forEach(function (rb) {
                // Uncheck all other radio buttons in the group
                if (rb != rbtn) {
                    rb.checked = false;
                }
            });
        });
    });

    address.addEventListener(
        "focusout", function () {
            console.log("test");
            if (address.value === '') {
                errorAdd.innerText = "* A value is required";
               errorAdd.style.display = "inline-block";
            }
            else {
                errorAdd.style.display = "none";
            }
        }
    );

    

    state.addEventListener(
        "change", function () {
            const selectedState = state.value;
            const citiesofState = statesandcities[selectedState];
            city.innerHTML = "<option value=''>-- Select City --</option>";

            citiesofState.forEach(function (cityinstate) {
                const option = document.createElement("option");
                option.text = cityinstate;
                city.appendChild(option);
            })
        }
    );

    uname.addEventListener(
        "focusout", function () {
            if (uname.value === '') {
                errorUname.innerText = "* A value is Required";
                errorUname.style.display = "inline-block";
            }
           
            else {
                errorUname.style.display = "none";
            }
        }
    );
    password.addEventListener(
        "focusout", function () {
            if (password.value === '') {
                errorPassword.innerText = "* A value is required";
                errorPassword.style.display = "inline-block";
            }
            else if (password.value.length < 8 ) {
                errorPassword.innerText = "* Password must have atleast 8 Char";
                errorPassword.style.display = "inline-block";
            }
            
            else {
                errorPassword.style.display = "none";
            }
        }
    );

    confPassword.addEventListener(
        "focusout", function () {
            if (password.value === '') {
                errorConPassword.innerText = "* A value is Required";
                errorConPassword.style.display = "inline-block";
               

            }
            else if (password.value !== confPassword.value) {
                errorConPassword.innerText = "*Password Doesn't Match";
                errorConPassword.style.display = "inline-block";
            }
            else {
                errorConPassword.style.display = "none";
            }
        }
    );
    
    
    
}




function numberInName(name) {
    
   

    if (!/^[a-zA-Z]+$/.test(name)) {
        return true;
    }
    return false;

}

function isTodayOrFutureDate(inputDate) {
    const inputDateObj = new Date(inputDate);
    const today = new Date();

    // Set the time of both dates to 00:00:00 for accurate comparison
    inputDateObj.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    return inputDateObj >= today;
}

function calculateAge(dob) {

    const today = new Date();
    const dobd = new Date(dob);
    return today.getFullYear() - dobd.getFullYear() ;
    
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validateForm() {
   

 
        window.open("webpage.html")
    
}




