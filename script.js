function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    console.log(input)

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        if (/^pet_\d{4}(?=.*[a-zA-Z])[a-zA-Z\d]+$/.test(input)) { // test() regular expression (RegEx) method. Characters explained later
            result = 'Valid Syntax 🟢';  // I also tried: if (input.startsWith('pet_') && /^pet_(?=.*[0-9]{4})(?=.*[a-zA-Z])[a-zA-Z\d]+$/test.slice(4))) but it didn't work                                                                 
        } else {                                                           
            result = 'Invalid Syntax 🔴';  // I wasn't sure where to add the document.getElementsByClassName to create the red and green circles using CSS, so I used emojis instead.  
        }
            document.getElementById('result').innerText = result;  // displays the result message as valid or invalid based on input
}


/* Regular Expressions (RegEx) explained:
/ / is the search pattern for whole string
^ starts string, $ ends string. 
Ensures 'pet_' is included in start of string, 
\d ensures exactly {4} digits in string follows "pet_", which is consistent with YYYY for year in date format. this can be changed to \d{2} to allow for only 2 YY requirements or just \d for no limits on characters
?= ensures a positive lookahead within (?=.*[a-zA-Z]), i.e there is at least one letter
.* allows for any amount of characters to appear between digits and letter(s) 
[a-zA-Z] ensures at least one letter character upper or lowercase,
[a-zA-Z\d] ensures that the string that starts with "pet_" contains at least a letter and a digit.
$ end of string. */