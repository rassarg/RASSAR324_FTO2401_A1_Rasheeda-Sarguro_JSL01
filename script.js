
function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = ''; // Placeholder for validation result

    if (input.startsWith("pet_")) { // checking that string starts with 'pet_'
        if (
            /\d/.test(input.split('_')[1]) && // \d used to test for digit numerical values after '_'
            /[a-zA-Z]/i.test(input.split('_')[1]) && // testing for upper or lowercase characters
            !/[!@#$%^&*()_+\=\[\]{};:"\\|,.<>\/?]/.test(input.split('_')[1]) // testing that it does NOT include special characters. I allowed apostrophes and hyphens as some names have those
        ) {
            result = "Valid Syntax 🟢";  // if 'pet_' is followed by any letter AND any number AND no disallowed characters
        } else {
            result = "Invalid syntax 🔴"; 
        }
    } else {
        result = "Invalid syntax 🔴"; // if it doesn't start with 'pet_'
    }
    document.getElementById('result').innerText = result;
}
