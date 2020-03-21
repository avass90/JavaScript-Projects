function Ride_Function() {
    var Height, Can_ride;
    Height= document.getElementById("Height").value;
    Can_ride = (Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML= Can_ride + " to ride.";
}

function age_Function() {
    var Age, Can_vote;
    age= document.getElementById("age").value;
    Can_vote=(age >= 18) ? "You are old enough":"You are not old enough";
    document.getElementById("vote") .innerHTML= Can_vote +" to vote!";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make= Make;
    this.Vehicle_Model= Model;
    this.Vehicle_Year= Year;
    this.Vehicle_Color= Color;
}
var Jack= new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily= new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik= new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function FlyRod(Brand, Length, Weight, Pieces) {
    this.FlyRod_Brand= Brand;
    this.FlyRod_Length= Length;
    this.FlyRod_Weight= Weight,
    this.FlyRod_Pieces= Pieces;
}

var Drew= new FlyRod("Orvis", 9, 5, 4);
var Sarah= new FlyRod("Reddington", 9, 4, 4);
var Linden= new FlyRod("Orvis", 9, 5, 2);
function rodFunction () {
    document.getElementById("New_and_This") .innerHTML=
    "Sarah fishes with a " + Sarah.FlyRod_Length + " foot " + Sarah.FlyRod_Weight + 
    " weight " + Sarah.FlyRod_Brand + " ,and it packs down into " + Sarah.FlyRod_Pieces + 
    " pieces for packability.";
}

function Jeans (Brand, Style, Color) {
    this.Jeans_Brand= Brand;
    this.Jeans_Style= Style;
    this.Jeans_Color= Color;
}
var Drew= new Jeans("Levi's", "504", "Kahki");
var Sarha= new Jeans("Old Navy", "Rockstar", "Black");
function step124Function() {
document.getElementById("step124") .innerHTML= "Drew wears " + Drew.Jeans_Color+" "+Drew.Jeans_Style+" " + Drew.Jeans_Brand;
}

function countdown_Function() {
    document.getElementById("Nested_Function") .innerHTML= Countdown()
    function Countdown() {
        var starting_point= 10;
        function Minus_one() {starting_point -= 1;}
        Minus_one();
        return "10 minus 1=" + starting_point;
    }
}