/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding which is when you basically bind with the Window. 
* 2. Implicit binding which is when you are calling a function on the right side of the dot and on the left side you are calling an object
* 3. New binding which is used when using a constructor fuction. It refers to the object that is created and returned by the construction function (still a little unsure on this one)
* 4. Explicit binding which is when you use .call or .apply, "this" is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const person = {
    name: "connor",
    age: 21,
    hometown: "carmel",
    speak: function(){
        console.log(`My name is ${this.name} and I'm ${this.age} and I'm from ${this.hometown}`);
    }
}

person.speak();


// Principle 3

// code example for New Binding
function greeting(hello){
    this.person = hello;
}

let Connor = new greeting ("Hello I'm Connor, how are you?");

console.log(Connor.person); //function being invoked



// Principle 4

// code example for Explicit Binding

function speak(){
    console.log(this.hello)
}

const myPerson = {
    name: "connor",
    hello: "Hi how are you?"
}

speak.call(myPerson); //saying bind the speak function with the object myPerson

