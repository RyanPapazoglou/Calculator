var op1;
var op2;

function operate(x) {
    if(document.getElementById('display').value == 0){
        document.getElementById('display').value = x;
    } else {
        document.getElementById('display').value += x;
    }
}