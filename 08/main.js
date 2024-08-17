//   For Loop

var cars = ["BMW", "Mercedes", "Hyundai", "KIA", "Honda", "Toyota", "Mazda"];
var names = " ";
var length = cars.length;
for (let i = 0; i < length; i++) {
    names += "<li>" + cars[i] + "</li>"
    document.getElementById("cars").innerHTML = names;
}

//   For/In Loop

var aashir = {
    fname: "Aashir",
    lname: "Jamil",
    email: "aashir.devpro@gmail.com",
    contact: "0302 2316734",
    userid: "27853"
};
var data = " ";
var x;
for (x in aashir) {
    data += "<li>" + aashir[x] + "</li>";
    document.getElementById("aashir").innerHTML = data;
}
//   While Loop


var number = " ";
var n = 0;
while (n < 10) {
    number += "The number is: " + n + "<br>";
    n++;
}
document.getElementById("numbersloop").innerHTML = number;


// Do While Loop

var number2 = " ";
var n2 = 0;

do {

    number2 += "The number is:" + n2 + "<br>";
    n2++;

} while (n2 < 10);
document.getElementById("number").innerHTML = number2;