// Opdracht Basic arrow functions
// deel a
// zet de functie om naar een arrow functie
// Remember: waar de arrow naar wijst wordt automatisch geretourneerd.
let ikRockArrowFunctions = () => console.log("Joe, ik rock de arrow functions!");

ikRockArrowFunctions()

// deel B
// Opdracht: schrijf de onderstaande functie om naar een arrow functie op 1 regel.

let fivePlusSeven = () => 5 + 7;

console.log(fivePlusSeven());

// Deel C: Als je parameter toe wilt voegen aan een arrow function, dan gaat dat op precies 
// dezelfde manier als je gewend bent: tussen de haakjes.
// Opdracht: Schrijf een arrow function, 
// op 1 regel (dus met een impliciete return statement), 
// die de params a en b bij-elkaar optelt. Noem de functie myFunction.

let myFunction = (a, b) => (a + b);

// myFunction();

// Deel D: Als je slechts 1 parameter hebt, 
// kun je de haakjes zelfs helemaal weglaten.
// Opdracht: Schrijf een arrow function op 1 regel, die de parameter a behoudt, 
// en altijd a plus 5 returned. Noem de functie addFive.
let addFive = a => a + 5;
console.log(addFive(3))

// Deel E: Je hebt gezien dat arrow functions een implicit return statement hebben
//  wanneer je de code op 1 regel kunt schrijven. Er is 1 uitzondering, 
// namelijk bij het returnen van een object {} . Wanneer je een object returned 
// moet het object in een () gezet worden, 
// om niet verward te worden met de curly braces {} van een function.

// Opdracht: Schrijf een arrow function met de naam createObject 
// met een implicit return statement (dus op 1 regel) 
// die een simpel object returned: {greeting: "hoi"}

let createObject = () => ({ greeting: "hoi" });
console.log(createObject())

