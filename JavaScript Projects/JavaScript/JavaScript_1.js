function Fly_Function() {
    var Fly_Output;
    var Flies = document.getElementById("Fly_Input").value;
    var Fly_String = " is a great fly!";
    switch(Flies) {
        case "Zebra Midge":
            Fly_Output = "Zebra Midge" + Fly_String;
        break;
        case "Copper John":
            Fly_Output = "Copper John" + Fly_String;
        break;
        case "Hares Ear":
            Fly_Output = "Hares Ear" + Fly_String;
        break;
        case "San Juan Worm":
            Fly_Output = "San Juan Worm" + Fly_String;
        break;  
        case "Parachute Adams":
            Fly_Output = "Parachute Adams" + Fly_String;
        break;  
        case "Pheasant Tail":
            Fly_Output = "Pheasant Tail" + Fly_String;
        break;
        default:
            Fly_Output = "Please enter a fly exactly as written on the above list."; 
    }
    document.getElementById("Output").innerHTML= Fly_Output;
}

function Hello_World_Function() {
    var A= document.getElementsByClassName("click");
    A[0].innerHTML= "The text has changed!";
}

var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");
var grd= ctx.createLinearGradient(0,0,170,0);
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();
grd.addColorStop(0, "black");
grd.addColorStop(0.5, "red");
grd.addColorStop(1, "white");
ctx.fillStyle= grd;
ctx.fillRect(100, 100, 150, 50);
