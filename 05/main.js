var user = {

firstname:"Aashir",
lastname:"Jamil",
qualification:"M.Sc Physics",
age: "27 years old",

fullData:function(){
    return this.firstname +" "+ this.lastname + " and her qualification is " + this.qualification + "," + this.age + ".";
}
};


// this is for function fullData
 //var data=user.fullData();
//document.getElementById("object").innerHTML = data;

// this is for slecting a  single or specific property of user object
document.getElementById("object").innerHTML = user.firstname + " " + user.lastname;

                              // Array


var color=["Red","Orange","Yellow","Blue","Green"];

//document.getElementById("array").innerHTML= color;


// this can replace the color of selected index
 /*color[2]="purple";
document.getElementById("array").innerHTML= color;*/

var newcolor=["Pink","Cyan","skyblue"];
var user=["Aashir", "Jamil"];
var numbers=[4, 8, 12, 5, 6, 7,8 ,9 ,0];

// it can concatenate the above three arrays with color array
var con = color.concat(newcolor, user, numbers);
document.getElementById("array").innerHTML = con;


//it can count the numbers of an elements in an array
/*var Length=color.length;
document.getElementById("array").innerHTML=Length;*/
            
                        