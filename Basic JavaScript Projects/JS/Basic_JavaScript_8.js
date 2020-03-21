function full_sentence() {
    var part_1= "Check out ";
    var part_2= "my concatenated ";
    var part_3= "sentence. ";
    var part_4= "It is real neat."
    var whole_quote= part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML= whole_quote;
}

function slice_Method() {
    var sentence= "I can remove the entire beginning of this and this is a sentence.";
    var section= sentence.slice(45, 65);
    document.getElementById("Slice").innerHTML= section;
}

function upperFunction() {
    var string= "click the button to change this text to all uppercase!";
    var upper= string.toUpperCase();
    document.getElementById("demo").innerHTML= upper;
}

function searchFunction() {
    var searched= "What is the position of the word Unicorn in this string?"
    var x=searched.search("Unicorn");
    document.getElementById("search_demo").innerHTML= x;
}

function string_Method() {
    var m= 182;
    document.getElementById("Numbers_to_string").innerHTML= m.toString();
}

function precision_Method() {
    var L= 354644.3254676452564786534367865425678542367545367;
    document.getElementById("Precision").innerHTML=L.toPrecision(7);
}

function onclickFunction() {
    var num= 69.420;
    var n= num.toFixed(1);
    document.getElementById("toFixed").innerHTML= n;
}

function valueofFunction() {
    var lyric= "Crab in my shoe mouth"
    var res= lyric.valueOf();
    document.getElementById("valueOf").innerHTML= res;
}