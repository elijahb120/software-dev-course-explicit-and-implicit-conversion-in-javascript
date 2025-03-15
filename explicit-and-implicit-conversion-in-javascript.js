/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean(false); // I removed the quotations around "false" because those made the value truthy. Now that it just says false, the value is falsey
if (isValid) {
    console.log("This is valid!");
}

let age = Number("25"); // I used the number conversion to signify that 25 should read as a number, not a string. Allowing it to perform addition and not mash numbers together.
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

//Example of implicit type conversion

if("You Passed Go") {
    console.log("Collect $200!") ; // Will run
}
if(NaN) {
    console.log("Do not collect $200") ; // Will not run
}

//Example of explicit type conversion

let str = "25.32 miles" ;
console.log((parseInt(str)) + "ish miles") ;
