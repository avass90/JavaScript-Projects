function Call_Loop() {
    var Digit="";
    var X= 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML= Digit;
}

function strlengthFunction() {
    var str= "Happy Friday!";
    var n= str.length;
    document.getElementById("string").innerHTML= n;
}

var Instruments= ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content= "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " 
    + Cat_Picture[1] + ".";
} 

function constant_function() {
    const Musical_Instrument= {type:"Guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color= "blue";
    Musical_Instrument.price= "$800";
    Musical_Instrument.handed= "Left-Handed"
    document.getElementById("Constant").innerHTML= "The cost of the " +
    Musical_Instrument.type + " was " + Musical_Instrument.price + " and it was for a "
    + Musical_Instrument.handed + " person.";
}

var Q=10
document.write(Q) 
{
    let Q= 5
    document.write ("<br>" + Q);
}
document.write("<br>" + Q)

function myFunction() {
    return Math.PI;
}
document.getElementById("demo").innerHTML= myFunction();

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML=car.description();

function breakFunction() {
    var text="";
    var i;
    for (i = 0; i < 5; i++) {
        if (i === 3) {
            break;
        }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}

function continueFunction() {
    var text="";
    var h;
    for (h = 0; h < 5; h++) {
        if (h === 3) {
            continue;
        }
        text += "The number is " + h + "<br>";
    }
    document.getElementById("continue").innerHTML= text;
}