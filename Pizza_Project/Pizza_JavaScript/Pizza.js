function getReceipt() {
    //This initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1="<h3>You Ordered:<h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName('size');
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" =$"+sizeTotal+".00");
    console.log("size text1:"+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will be passed on to each function
    getToppings(runningTotal,text1);
};

function getToppings(runningTotal,text1) {
    var toppingsTotal = 0;
    var selectedToppings = [];
    var toppingsArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingsArray.length; j++) {
        if (toppingsArray[j].checked) {
            selectedToppings.push(toppingsArray[j].value);
            console.log("selected toppings item: ("+toppingsArray[j].value+")");
            text1 = text1+toppingsArray[j].value+"<br>";
        }
    }
    var toppingsCount = selectedToppings.length;
    if (toppingsCount > 1) {
        toppingsTotal = (toppingsCount - 1);
    } else {
        toppingsTotal = 0;
    }
    runningTotal = (runningTotal + toppingsTotal);
    console.log("total selected toppings items:"+toppingsCount);
    console.log(toppingsCount+" toppings - 1 free toppings = "+"$"+toppingsTotal+".00");
    console.log("toppings text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"
        +runningTotal+".00"+"</strong></h3>";
};