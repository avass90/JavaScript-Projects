function Step_60_Function() {
    var fri="I love Fridays!";
    var result=fri.fontcolor("red");
    document.getElementById("red_Friday") .innerHTML= result;
}

function step61Function() {
    var sentence= "I am executing";
    sentence += " step 61 of the JavaScript Course!";
    document.getElementById("step61") .innerHTML=sentence;
}

var x= myFunction(4,3);
    document.getElementById("step67") .innerHTML =x;

    function myFunction(a, b) {
        return a* b;
    }