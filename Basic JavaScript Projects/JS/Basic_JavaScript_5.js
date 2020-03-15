document.write(typeof "Word");


document.write(typeof 4);

function my_Function() {
    document.getElementById("Test") .innerHTML= 0/0;
}

function stringFunction() {
document .getElementById("String") .innerHTML= isNaN("This is a string");
}

function numberFunction() {
document .getElementById("Number") .innerHTML= isNaN("007");
}

document.write(2E310);

document.write(-3E310);

document.write(10>8);

document.write(10<8);

console.log(4+4);

document.write(10+"5");

console.log(5>6);

document.write((10+5)==15);

document.write((10-5)==15);

W= "8";
X= 10;
Y= 10;
Z="10";
document.write(X===Y);
document.write(X===W);
document.write(Y===Z);
document.write(W===Z);

document.write(5>2 && 10>2);
document.write(5>2 && 10>11);
document.write(5>2 || 10>11);
document.write(5<2 || 10>11);

function not_Function() {
    document.getElementById("Not").innerHTML= !(5>10);
}

function not_Function2() {
    document.getElementById("Not2") .innerHTML= !(5<10);
}
