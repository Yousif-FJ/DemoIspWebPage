function validateForm() {
    const nameField = document.getElementById("name-input");
    const numberField = document.getElementById("number-input");
    const emailField = document.getElementById("email-input");
    const validationText = document.getElementById("validation-text");

    if (nameField.value == "" || numberField.value == "" || emailField.value == "") {
        validationText.innerText = "Fields are required";
    }
    else{
        validationText.innerText = "";
    }   
}