const HTML_OUTPUT = document.getElementById("statusMessage");

console.log("Running Sal's Strawberries")

function fb_error(error){
  console.log("there was an error reading the message");
  console.error(error);
}

function fb_write(){
    // Get the form data
//if (GLOBAL_user == null)
//alert()
console.log("reading write Form")
    const favoriteFruit = document.getElementById("favoriteFruit").value
    let fruit = favoriteFruit.value
    const favQuantity = document.getElementById("favoriteQuantity").value
    let favoriteQuantity = favQuantity.value
    firebase.database().ref('/').set(
  
    )
  
}


 // firebase.database().ref('/').set(
   // {
   //   message: 'hello world'
   // }
 // )
foodTable ={
  users:{
    nick: "noodles",
    tom: "bread"
  }
}


firebase.database().ref('/').set(foodTable)
firebase.database().ref('/users/alex/').set("jam");
firebase.database().ref('/users/tom/').set("cheese");
let user;
let score = "berrys";
firebase.database().ref('/users/ben/').set(
 score
);
//console.log(users+ "likes"+ favFruit)

