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
    const favoriteFruit = document.getElementById("favoriteFruit").value;
    const username = document.getElementById("name").value;
    const fruitQuantity = document.getElementById("fruitQuantity").value;

    const statusMessage = document.getElementById("statusMessage");
    firebase.database().ref('/users/' + GLOBAL_user["uid"]).set(
      {
        user: String(username),
        fruit: String(favoriteFruit),
        amount: Number(fruitQuantity)
      });
  }
}

function showEmail() {
   if (GLOBAL_user == null)
    alert("please login")
  else {
  console.log("Reading email");
  firebase.database().ref('/users/' + GLOBAL_user["uid"]).once('value', fb_displayEmail, fb_error)
}
}
function fb_displayEmail(snapshot) {
  let dbdata = snapshot.val()
  console.log("welcome " + dbdata["user"]
    + " your fav, " + dbdata["fruit"] +
    " are on sale, " + dbdata["amount"]
    + dbdata["fruit"] + " are only $ " + (Number(dbdata["amount"]) * 0.5))

  HTML_OUTPUT.innerHTML = "welcome " + dbdata["user"] + "<br>"
    + "Your fav, " + dbdata["fruit"] + " are on sale, " + dbdata["amount"]
    + " " + dbdata["fruit"] + " are only $"
    + (Number(dbdata["amount"]) * 0.5);
}

/*function showcomments(){
  console.log("reading comments");
   firebase.database().ref('/users/' + GLOBAL_user["uid"]).once('value', fb_displaycomments, fb_error)
}

function fb_displaycomments(snapshot){
let dbdata
}*/
// firebase.database().ref('/').set(
// {
//   message: 'hello world'
// }
// )
//console.log(users+ "likes"+ favFruit)

