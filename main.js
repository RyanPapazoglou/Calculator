/* Simple calculator developed by Ryan Papazoglou*/

var numStack = new Array();
var opStack = new Array();
var result;
var operator = "";
var op1;
var op2;
var opPushed;

// function popVals () {
//     operator = (opStack.pop());
//     op2 = parseInt(numStack.pop());
//     op1 = parseInt(numStack.pop());
// }

function calculate() {
    operator = (opStack.pop());
    var op2 = parseInt(numStack.pop());
    var op1 = parseInt(numStack.pop());
    switch (operator) {
        case "+":
            show(op1 + op2);
            break;
        case "-":
            show(op1 - op2);
            break;
        case "*":
             show(op1 * op2);
            break;
        case "/":
            show(op1 / op2);
            break;
        //show(result);
    }
}

function show(x){
    document.getElementById('display').value = x;
 }

function decimal(x){
    if(!document.getElementById('display').value.includes(".")){
        document.getElementById('display').value += x;
    }
}

function operate(x) {
    if(document.getElementById('display').value == 0 || opPushed){
        document.getElementById('display').value = x;
        opPushed = false;
    } else {
        document.getElementById('display').value += x;
    }
}

function changeSign() {
    document.getElementById('display').value = document.getElementById('display').value * -1;
}

function flag () {
    opPushed = true;
    return opPushed;
}







