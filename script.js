function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    console.log(input)

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        if (/^pet_(?=.*[0-9]{4})(?=.*[a-zA-Z])[a-zA-Z\d]+$/.test(input)) { // ^ starts string and 'pet_' is included in start of string, ?=.*[0-9] = ensures at least one number is included, [0-9]{4} ensures a 4-digit number which is correct for year, (?=.*[a-zA-Z]) ensures at least one character upper or lowercase, [a-zA-Z\d]+ ensures there is a match of alphanumeric characters, $ ends string. 
            result = 'Valid Syntax 🟢';                                    // test() regular expression (RegEx) method                               
        } else {                                                           // I also tried: if (input.startsWith('pet_') && /^pet_(?=.*[0-9]{4})(?=.*[a-zA-Z])[a-zA-Z\d]+$/input.slice(4))) but it didn't work 
            result = 'Invalid Syntax 🔴';
        }
            document.getElementById('result').innerText = result;  // displays the result message as valid or invalid based on input
}
// I wasn't sure where and how to add the document.getElementsByClassName to create the red and green circles from CSS, so I used emojis instead.  
 