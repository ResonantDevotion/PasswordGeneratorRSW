# pseudocode

- create a repo //
- deploy page //
- add repo to vs code //
- copy files to repo //

 
<!-- Present a series of prompts for password criteria -->
- Create a characterOption function that creates a new array when the user returns a boolean value for inclusion of each character option.
- 





- prompt the user for 
  1. passwordLength (number between 10 and 64) 
  (parseInt(prompt("Please choose length of password that is between 10-64 characters")))
      Create a Fn of:
      IF passwordLength is less than 10 or (||) passwordLength more than 64:
      ALERT the user and RETURN prompt
      ELSE , RETURN passwordLength
      "Please choose length of password that is between 10-64 characters"

  
- prompt the user with: "Please choose what character types you would like your password to be generated from."

- Create a WHILE LOO w/:
  2. specialChar (boolean yes/no)
    - prompt(do you want to include any special characters?)
      IF yes (TRUE)
        THEN update the specialChar variable to TRUE
      ELSE update the specialChar variable to FALSE

  3. lowercasedChar //
      - prompt(do you want to include any lower cased characters?)
      IF yes (TRUE)
        THEN update the lower cased variable to TRUE
      ELSE update the lower cased variable to FALSE

  4. uppercasedChar //
      - prompt(do you want to include any upper cased characters?)
      IF yes (TRUE)
        THEN update the upper cased variable to TRUE
      ELSE update the upper cased variable to FALSE
  
  5. numericalChar //
      - prompt(do you want to include any numerical characters?)
      IF yes (TRUE)
        THEN update the numericalChar variable to TRUE
      ELSE update the numericalChar variable to FALSE


<!-- Code should validate for each input and at least one character type should be selected -->
-  Loop through all 4 (boolean) variables 
      IF all of them have a value of FALSE 
        THEN tell user than he needs to have at least 1 of them > so prompt them again
        

- ITERATE THROUGH VARIABLES
- If only one variable is TRUE (userCharArray TRUE == 1), choose x(passwordLength) random (Maths.random(passwordLength)) characters out of the corresponding array.
    - Set this as generatedPassword

- If two variables are TRUE (userCharArray TRUE = >1 <2), choose x(passwordLength) random characters, half from each out of the corresponding arrays.
    - Set this as generatedPassword

- If three variables are TRUE (userCharArray TRUE = >2 <3), choose x(passwordLength) random characters 1/3 out of the corresponding arrays.
    - Set this as generatedPassword

 - If four variables are TRUE (userCharArray TRUE = >3 <4), choose x(passwordLength) random characters 1/4 of the corresponding arrays.
    - Set this as generatedPassword



<!-- * Once prompts are answered then the password should be generated and displayed in an alert or written to the page -->
- alert(generatedPassword) 






<!-- Instructions from readme -->
<!-- * Generate a password when the button is clicked 1
  * Present a series of prompts for password criteria 2
    * Length of password
      * At least 10 characters but no more than 64.
    * Character types
      * Lowercase
      * Uppercase
      * Numeric
      * Special characters ($@%&*, etc) -->
  * Code should validate for each input and at least one character type should be selected - 
  <!-- * Once prompts are answered then the password should be generated and displayed in an alert or written to the page -->


