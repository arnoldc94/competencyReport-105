//global var and can use it in other functions
var list = [];




function sum(num1, num2){
    return num1 + num2;
}


//create function--paramater is name
function sayHello(name, lastName){
    console.log("Hi " + name + lastName);
}



function runTest1(){
    console.log("starting test 1 - functions");
//calling the function
    sayHello("Corey ", "Arnold");

    let a = 21;
    let b = 42;
    let result = sum(a, b);//use result to store result of paramater
    console.log(result);//pass the result
}//do not have to send anything in paramater for JS.

function Dog(name, age, color){// constructor start with capital letter
    this.name = name;
    this.age = age;
    this.color = color;

}

function runTest2(){
    console.log("Test for objects");
    //object literal
    // used: configuration, 1 time structure
    let dog = {//dog variable points to the object
        name: "Fido",//attribute of dog/ literal use :
        age: 2,
        color: "Green"
    };
    console.log(dog);

    console.log(dog.name); //the period gets inside the object
    dog.age = 3;

    let lola = {
        name: "Lola",
        age: 4,
        color:"Pink"
    };
    console.log(lola);

    //object constructor
    //used: multiple object same strucure
    
    let solo = new Dog("solo", 2, "Blue");// in constructor use =
    console.log(solo);

    let another = new Dog("Loco", 5, "Red");
    console.log(another);

}

