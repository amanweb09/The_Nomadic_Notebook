//HAMBURGER CONSTANTS
const hamburger = document.getElementById('link0');
const home = document.getElementById('link1');
const blog = document.getElementById('link2');
const contact = document.getElementById('link3');
const join = document.getElementById('link4');

//HAMBURGER FUNCTIONS
hamburger.addEventListener('click', () => {
    document.getElementById('nav-list').classList.toggle('open');
    document.querySelectorAll(".links").classList.toggle('open');
    hamburger.classList.toggle('open');
})

//FORM VALIDATION
let submitButton = document.getElementById('submit-button').value;

//NAME VALIDATION
function validateForm() {
    let nameField = document.getElementById('name-field').value;

    if (nameField == null || nameField == "") {
        alert('Name Cannot be Blank');
        return false;
    }
    else {
        return true;
    }
}

//CONTACT VALIDATION
function contactValidation() {
    let telField = document.getElementById('tel-field').value;

    if (isNaN(num)) {
        alert('Contact Number Field Should Contain Numbers Only!');
        return false;
    }
    else if (telField == null || telField == "") {
        return true;
    }
    else {
        return true;
    }
}

//EMAIL VALIDATION
function emailValidation() {
    let emailField = document.getElementById('email-field').value;
    let atPosition = emailField.indexOf("@");
    let dotPosition = emailField.lastIndexOf(".");

    if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= emailField.length) {
        alert("Please enter a valid e-mail address \n atpostion:" + atPosition + "\n dotposition:" + dotPosition);
        return false;
    }
}


  




