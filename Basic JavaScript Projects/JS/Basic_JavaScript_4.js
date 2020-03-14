function myDictionary() {
    var Bird = {
        Species: "Duck",
        Color: "Yellow",
        Type: "Rubber",
        Age: "3",
        Sound: "Quack",
    };
    delete Bird.Sound;
    document.getElementById("Dictionary") .innerHTML= Bird.Sound;
}