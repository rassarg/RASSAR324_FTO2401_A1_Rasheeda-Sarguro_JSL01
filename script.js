
function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; // Placeholder for validation result

    if (input.startsWith("pet_")) { // checking that string starts with 'pet_'
        if (
            /\d/.test(input.split('_')[1]) && // \d used to test for digit numerical values after 'pet_'
            /[a-zA-Z]/i.test(input.split('_')[1]) && // testing for upper or lowercase characters
            !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(input.split('_')[1]) // testing that it does NOT include special characters after 'pet_'
        ) {
            result = "Valid Syntax 🟢";
        } else {
            result = "Invalid syntax 🔴";
        }
    } else {
        result = "Invalid syntax";
    }
    document.getElementById('result').innerText = result;
}




