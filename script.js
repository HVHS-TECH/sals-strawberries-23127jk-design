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
    //const username2 = document.getElementById("name");
   // let user_2 = name.value;
    console.log("nick has apples")
    const statusMessage = document.getElementById("statusMessage");
    firebase.database().ref('/users/'+GLOBAL_user["uid"]).set(
    {
    user: username,
    fruit : favoriteFruit
    })
  }
}
/*function showEmail(){
    console.log("Reading email");
  firebase.database().ref('/Food').once('value', fb_displayEmail, fb_readError)
 }
  function fb_displayEmail(snapshot){
    console.log(snapshot.val())
//let Email = snapshot.val()
console.log("Your favortie fruit is " + Email)
  }*/
 
// firebase.database().ref('/').set(
// {
//   message: 'hello world'
// }
// )
//console.log(users+ "likes"+ favFruit)

