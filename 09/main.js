var x = 11;

// if, if else & elseif
if (x == 10) {
    document.getElementById("if").innerHTML = "The value of x is " + x;
} else if (x == 10) {
    document.getElementById("if").innerHTML = "The value of x is not 10";
}
else if (x == 11) {
    document.getElementById("if").innerHTML = "The value of x is 11";
} else {
    document.getElementById("if").innerHTML = "The value is not in a range";
}

// if elseif condition using function

function checkbutton() {
    var y = document.getElementById("input").value;

    if (y == 10) {
        document.getElementById("checkvalue").innerHTML = "The value of x is " + y;
    } else if (y == 11) {
        document.getElementById("checkvalue").innerHTML = "The value of x is " + y;
    }
    else if (y == 12) {
        document.getElementById("checkvalue").innerHTML = "The value of x is " + y;
    } else {
        document.getElementById("checkvalue").innerHTML = "The value is not in a range";
    }


}



function switchbutton() {

var colors =document.getElementById("switchinput").value; 

switch (colors) {
    case "Red":
        document.getElementById("switchcheckvalue").innerHTML = "The color is" + " " +  colors;
        break;
    case "Blue":
        document.getElementById("switchcheckvalue").innerHTML = "The color is " + " " + colors;
        break;
    case "Green":
        document.getElementById("switchcheckvalue").innerHTML = "The color is " + " " + colors;
        break;

    default:
        document.getElementById("switchcheckvalue").innerHTML = "The value is invalid";
        
}

}