function displayType(guitar) {
    var guitarType = guitar.getAttribute("data-guitar-type");
    alert(guitarType + " is made by " +guitar.innerHTML + " guitar company!");
}