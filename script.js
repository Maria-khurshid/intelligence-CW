let intelligenceLevels = [
    "Smart",
    "Confident",
    "Brave",
    "Honest",
    "Helpfull",
    "Mastermind",
    "Dumb",
    "Great",
    "google",
    "over confident",
    "genius",
    "good person",
    "awsome",
    "jack of all trades",
    "dexter",
    "average"
]

function check() {
    let name = document.querySelector("input").value;
    let randomName = parseInt(Math.random() * intelligenceLevels.length);
    alert(intelligenceLevels[randomName]);
    // let intellect;
    // if (name == false) {
    //     alert("please enter Your Name");
    // } else if (name.charAt(0).toLowerCase() == "a") {
    //     intellect = intelligenceLevels[0];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "b") {
    //     intellect = intelligenceLevels[1];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "c") {
    //     intellect = intelligenceLevels[2];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "d") {
    //     intellect = intelligenceLevels[3];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "e") {
    //     intellect = intelligenceLevels[4];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "f") {
    //     intellect = intelligenceLevels[5];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "g") {
    //     intellect = intelligenceLevels[6];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "h") {
    //     intellect = intelligenceLevels[7];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "i") {
    //     intellect = intelligenceLevels[8];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "j") {
    //     intellect = intelligenceLevels[9];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "k") {
    //     intellect = intelligenceLevels[10];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "l") {
    //     intellect = intelligenceLevels[11];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "m") {
    //     intellect = intelligenceLevels[12];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "n") {
    //     intellect = intelligenceLevels[13];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "o") {
    //     intellect = intelligenceLevels[14];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "p") {
    //     intellect = intelligenceLevels[15];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "q") {
    //     intellect = intelligenceLevels[4];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "r") {
    //     intellect = intelligenceLevels[6];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "s") {
    //     intellect = intelligenceLevels[6];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "t") {
    //     intellect = intelligenceLevels[6];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "u") {
    //     intellect = intelligenceLevels[6];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "v") {
    //     intellect = intelligenceLevels[6];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "w") {
    //     intellect = intelligenceLevels[6];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "x") {
    //     intellect = intelligenceLevels[6];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "y") {
    //     intellect = intelligenceLevels[6];
    //     alert(name + " You are " + intellect);
    // } else if (name.charAt(0).toLowerCase() == "z") {
    //     intellect = intelligenceLevels[6];
    //     alert(name + " You are " + intellect);
    // }
}