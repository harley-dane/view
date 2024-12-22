/*let input1El = document.getElementById("input1")


let btn1El  = document.getElementById("btn1")

let outpEl = document.getElementById("out1")

function Line(){
    outpEl.textContent = input1El.value
}

btn1El.addEventListener("click", Line);

let demo = document.getElementById("demo")
const friends =["John", " Peter", " saly"]
let text = " ";

for(let i = 0; i < friends.length; i++){
    console.log(`Hello ${friends[i]} Welkome to my Party` )
   text += `Hello ${friends[i]} Welkome to my party`
}
 demo.textContent = text


// write a function and display input on the page 

let inPute = document.getElementById("inPute")
let pagel = document.getElementById("pagel")

function display(){
    pagel.textContent = inPute.value

}*/
/*
let input = prompt ("Enter your name: ")

while(input === null || input ===""){
    input = prompt("Enter your name:");
}

alert("Hello "+ input + " welcome to the page")
*/

// bouncify character
/*let text = " "
while(true){
    const input = prompt(" Enter some text, the letter will be uppercase and lowercase")

    // incase null
    if(input === null){
        alert("there is no escape!");
    }
    // incase empty string
    if(input === "" ){
        alert("no empty input, try again")
    }

    if(input) {
        text = input;
        break;
    }
}

// special character
const special = "123456789!@#$%^&*()_+={}/[]/|;':,.<> ?";
let newText = " ";
let upper = true;

//loop through the text 

for(const char of text) {
    if(special.indexOf(char) === -1 ){
        if(upper){
            newText += char.toUpperCase();
        }else {
            newText += char.toLowerCase();
        }
        upper = !upper;
    }else {
        newText += char;
    }
}

alert(newText);*/

// ask user for 2 numbers

/*let num1 = Number(prompt(" Enter 1st number"))
let num2 = Number(prompt(" Enter 2nd number"))

while(isNaN(num1) || isNaN(num2)){
    num1 = Number(prompt(" Enter 1st number"))
    num2 = Number(prompt(" Enter 2nd number"))
}

// ask for type of operation
const operation = prompt(" ")

let result;
if (operation === "+") {
    result = num1 + num2;
}else if(operation === "-"){
    result = num1 - num2;
}else if (operation === "*"){
    result = num1 * num2;
}else if ( operation === "/"){
    result =  num1 / num2;

}else{
    alert("invalid operation")
}

alert(`The result is :  ${result}`)*/

// ask fot 2 numbers
debugger;
let num1 = Number(prompt("Enter first number"))
let num2 = Number(prompt("Enter second number"))

while(isNaN(num1) || isNaN(num2)){
    num1 = Number(prompt("Enter first number"))
    num2 = Number(prompt("Enter second number"))
}

// ask for type of operation
const operation = prompt("Enter operation")

let result;
if(operation === "+"){
    result = num1 + num2;
} else if(operation === "-"){
    result = num1 - num2;
}else if(operation === "*"){
    result = num1 * num2;
}else if(operation === "/"){
    result = num1 / num2;
}else{
    alert("invalid operation")
}

alert(`The result is:${result}`)



