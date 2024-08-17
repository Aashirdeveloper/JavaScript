
// finding an element with the id
var a = document.getElementById("demo");
a.innerHTML="<h1>Hello World!</h1>";

// finding an element with the tag name
var x = document.getElementsByTagName("p");
document.getElementById("demo2").innerHTML=x[0].innerHTML;

// finding and element with the class name
var y= document.getElementsByClassName("p1");
document.getElementById("demo3").innerHTML=y[1].innerHTML;

//Change HTML Content
function changehtml(){
    document.getElementById("demo4").innerHTML='<a href="#">This is Link Generated Dynamically</a>';
}

//Change HTML Attribute
function changelink(){
    document.getElementById("elink").href="https://google.com";
    document.getElementById("elink").target="_blank";
}

// change attribute
 function setNewAttribute(){
    document.getElementById("p5").setAttribute("class","blue");
}

// create a new element

function createNewButton(){
    var btn = document.createElement("BUTTON");
    var btnTxt = document.createTextNode("CKLICK ME");
    btn.appendChild(btnTxt);
    document.getElementById("p6").appendChild(btn);
}

//Remove HTML Element
function removeListItem(){
    var list = document.getElementById("ul1");
    list.removeChild(list.childNodes[0]);
    
}


