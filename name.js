var randomName = ["Null", "Kartik", "Akarshita", "Amritpal", "Lakshay Mahajan", "Bhavish", "Neev", "Mansha", "Anshdeep", "Jasmeet", "Khwaish", "Trisha", "Vibanshu", "Sameer", "Kavish", "Kritika", "Apurva", "Saksham", "Sunandan", "Lakshay"]
var randomNumber = Math.floor(Math.random() * 19) + 1;

var studentCall = randomName[randomNumber];

console.log(randomNumber, studentCall);


// $("h1").html("<b>"+studentCall+"</b>")
document.querySelector("h1").innerHTML = studentCall;