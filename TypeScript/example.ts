/*

const firstName="John";

console.log(firstName.length()); // This will throw an error because length is a property, not a method.
console.log(firstName.length); // This will correctly log the length of the string, which is 4.


let a: number = 100;   //type annotation for variable 'a'. here it is unnecessary type annotation because TypeScript can infer the type from the assigned value.
let b= 200;            //type inferred as number by TypeScript.
console.log(a);



//function xyz(firstName: string) {}
function xyz(firstName: string, lastName: string) {}         //correct for two args.

xyz("John","Smith"); //it throws error because function 'xyz' is defined to take only one argument, but two arguments are being passed.


*/
let bestSong = Math.random() > 0.5 ? "Bohemian Rhapsody" : "Stairway to Heaven";
console.log(bestSong); // This will log either "Bohemian Rhapsody" or "Stairway to Heaven" based on the random condition.

