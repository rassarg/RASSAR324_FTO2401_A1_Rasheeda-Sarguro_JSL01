function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    console.log(input)

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        if (/^pet_(?=.*[0-9]{4})(?=.*[a-zA-Z])[a-zA-Z\d]+$/.test(input)) { 
            result = 'Valid Syntax';
        } else {
            result = 'Invalid Syntax';
        }
            document.getElementById('result').innerText = result;
}

