var x=10;

function myFunction() {
    function add1Function() {
        document.write (10+x+"<br>");
    }
    function add2Function() {
        document.write(20+x);
    }
    document.getElementById("step129.1") .innerHTML= add1Function() + add2Function();
}



function myFunction2() {
    function add3Function() {
        var y=5;
        console.log (10+y+"<br>");
    }
    function add4Function() {
        console.log(20+y);
    }
    document.getElementById("step129.2") .innerHTML= add3Function() + add4Function();
}

function get_Date() {
    if (new Date() .getHours()<12) {
        document.getElementById("step133").innerHTML="Top of the mornin' to ya!"
    } 
    else { document.getElementById("step133").innerHTML="You slept the day away!"}
}

function Size_Function() {
    fish= document.getElementById("fish").value;
    if (fish >= 18) {
        Keeper= "Woah! You caught a Lunker!";
    }
    else {
        Keeper= "You better throw that minnow back before you get a ticket!";
    }
    document.getElementById("How_many_inches?") .innerHTML= Keeper;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time >0) {
        Reply= "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply= "It is the afternoon.";
    }
    else {
        Reply= "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
}
