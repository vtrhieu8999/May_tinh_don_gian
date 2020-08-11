let layout = "";
let isop = "";
// let i = parseInt(0);
let a = parseInt(0);
let b = parseInt(0);


function C(){
    layout = "";
    isop = "";
    a = parseInt(0);
    b = parseInt(0);
    document.getElementById("display").innerText= "0";
}

function cal(x, y){

    switch (isop){
        case '-':
            return x - y;

        case '+':
            return x + y;

        case 'x':
            return x * y;

        case '/':
            return x / y;
    }

}

function addNum(x){
    if(document.getElementById("display").innerText=="0")
        document.getElementById("display").innerText = "";
    layout += x;
    document.getElementById("display").innerText += x;
}

function addOp(x){
    a= parseInt(layout);
    layout="";
    isop = x;
    document.getElementById("display").innerText += x;
}

function equal(){
    b= parseInt(layout);
    a= cal(a, b);
    document.getElementById("display").innerText= a;
    layout= a;
    b= 0;
}