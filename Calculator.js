
function Display(x){
    document.getElementById("result").innerHTML += x.value;

}
function equals(){
    var equation = document.getElementById("result").innerHTML;
    var res = eval(equation);
    document.getElementById("result").innerHTML = res;
}

function clearscr(){
    document.getElementById("result").innerHTML = "";
}

function sqrt(){
    var x = document.getElementById("result").innerHTML;
    var sqrt = Math.sqrt(x);
    document.getElementById("result").innerHTML = sqrt;
}

function cubrt(){
    var x = document.getElementById("result").innerHTML;
    var cubrt = Math.cbrt(x);
    document.getElementById("result").innerHTML = cubrt;
}

function oneby(){
    var x = document.getElementById("result").innerHTML;
    var res = 1/x;
    document.getElementById("result").innerHTML = res;
}
function CLOSE(){
    window.close();
}