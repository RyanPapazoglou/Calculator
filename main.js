/* Simple calculator developed by Ryan Papazoglou*/

var numStack = new Array();
var opStack = new Array();
var result;
var operator = "";
var op1;
var op2;
var opPushed;

function calculate() {
    operator = (opStack.pop());
    var op2 = parseFloat(numStack.pop());
    var op1 = parseFloat(numStack.pop());
    switch (operator) {
        case "+":
            result = op1 + op2;
            show(result.toPrecision(4));
            result = 0;
            break;
        case "-":
            result = op1 - op2;
            show(result.toPrecision(4));
            result = 0;
            break;
        case "*":
            result = op1 * op2;
            show(result.toPrecision(4));
            result = 0;
            break;
        case "/":
            result = op1 / op2;
            show(result.toPrecision(4));
            result = 0;
            break;
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
    if(document.getElementById('display').value == 0){
        document.getElementById('display').value = x;
    } else {
        document.getElementById('display').value += x;
    }
}

function changeSign() {
    document.getElementById('display').value = document.getElementById('display').value * -1;
}








