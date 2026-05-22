const HTML_OUTPUT = document.getElementById("statusMessage");

console.log("Running Sal's Strawberries")

function fb_error(error) {
  console.log("there was an error reading the message");
  console.error(error);
}
var GLOBAL_user;

function fb_write() {
  // Get the form data
  if (GLOBAL_user == null)
    alert("please login")
  else {
    const favoriteFruit = document.getElementById("favoriteFruit")
     let Fruit = favoriteFruit.value;
    const username = document.getElementById("name");
      let user = username.value;
    //const username2 = document.getElementById("name");
   // let user_2 = name.value;
    console.log("nick has apples")
    const statusMessage = document.getElementById("statusMessage");
    firebase.database().ref('/users').set(GLOBAL_user + Fruit)
    {
      Fruit
    }
  }

}


// firebase.database().ref('/').set(
// {
//   message: 'hello world'
// }
// )
foodTable = {
  users: {
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

