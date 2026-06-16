/*
let names: string = "John";
names="John";
names="Smith";
names=200;    // This will throw a type error because 'names' is declared as a string, but 200 is a number.
names=true;    // This will throw a type error because 'names' is declared as a string, but true is a boolean.

*/
/*
let name1: string;
let heightInCm : number;
let isActive : boolean; 

const names1 : string[] =['John','Smith','Alice','alice'];   // This is an array of strings, and it can only contain string values. The array is initialized with four string elements: 'John', 'Smith', 'Alice', and 'alice'. The type annotation string[] indicates that this variable is expected to hold an array of strings, ensuring type safety in TypeScript.
const namesNew : [string , number ,boolean] =['John',100,true,'alice'];   // This is another way to declare an array of strings in TypeScript. The type annotation Array<string> serves the same purpose as string[], indicating that this variable is expected to hold an array of strings. The array is initialized with the same four string elements: 'John', 'Smith', 'Alice', and 'alice'. Both string[] and Array<string> are valid ways to declare an array of strings in TypeScript, and they can be used interchangeably based on personal preference or coding style.




let sayHello: (name: string) => string;  // This is a function type annotation in TypeScript. It specifies that the variable sayHello is expected to hold a function that takes a single parameter name of type string and returns a value of type string. The arrow notation (name: string) => string indicates the function's signature, where the parameter name is of type string, and the return type is also string. This allows TypeScript to enforce type safety when assigning functions to sayHello, ensuring that any assigned function adheres to this specified signature.
sayHello = function(){
    return 'some string';
}
sayHello('hello');
*/


/*
//object type annotation.
let person: { name: string; height in cm: number; isActive: boolean } = {
    name: 'John',
    height in cm: 180,
    isActive: true
};
*/


/*
let x:boolean | string;        // can add these instead of string '|"hello"| "hi";' 
    x= true;                  // This is valid because x can be a boolean.
    x= "Hello";               // This is also valid because x can be a string.
*/


/*
const Poet ={                          //makes type shape
    name : "William Wordsworth",
    born : 1770,
};
const PoetLater: typeof Poet = {        // typeof Poet is used to create a new type based on the structure of the Poet object.                                   
    name : "David Wordsworth",          // This means that PoetLater must have the same properties and types as Poet.
    born : 1780,
};
*/

/*
//Type Aliases  --  custom type.

type Poet = {      //Poet-->Custom type.
    name : string;
    born : number;
};
const PoetLater: Poet = {
    name : "David Wordsworth",
    born : 1980,
};  
const AnotherPoetLater: Poet = {
    name : "William Swordsman",
    born : 1770,
};  

*/ 


/*
//Interface --  custom type.

interface Poet{               //No need to use '=' sign while declaring interface.but same application as type alias.
    name: string;
    born: number;
}
const PoetLater: Poet = {
    name : "David Wordsworth",
    born : 1980,
};  
const AnotherPoetLater: Poet = {
    name : "William Swordsman",
    born : 1770,

};
*/

/*
interface Poet{               //No need to use '=' sign while declaring interface.but same application as type alias.
    name: string;
    born: number;
};
interface Poet{               //No need to use '=' sign while declaring interface.but same application as type alias.
    salary: number;
    job: string;
};
const PoetLater: Poet = {
    name : "ThorFell Swordsman",
    born : 1980,
    salary : 10000,
    job : "Developer",
};  
*/

//type alias can utilize 'primitive types' & 'union types'.
type x= string | number

let firstName : x;
firstName = "Henry";
firstName = 200;
firstNmae = true;     //error 


