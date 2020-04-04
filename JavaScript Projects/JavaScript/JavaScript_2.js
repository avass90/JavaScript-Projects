function validateForm() {
    var x=document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("First Name must be filled out");
        return false;
    }
    var y=document.forms["myForm"]["lname"].value;
    if (y == "") {
        alert("Last Name must be filled out");
        return false;  
    }
    var z=document.forms["myForm"]["email"].value;
    if (z == "") {
        alert("Email Address must be filled out");
        return false;  
    }
    var w=document.forms["myForm"]["pnumber"].value;
    if (isNaN(w) || w.length != 10) {
        alert("Please enter a 10 digit telephone number");
    }
}
