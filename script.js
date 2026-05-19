const HTML_OUTPUT = document.getElementById("statusMessage");

console.log("Running Sal's Strawberries")

function fb_error(error){
  console.log("there was an error reading the message");
  console.error(error);
}

function writeForm(){
    // Get the form data
    console.log("reading info")
    firebase.database().ref('/').child('message').once('value')
    var favFruit = document.getElementById("favoriteFruit").value;
}


  firebase.database().ref('/').set(
    {
      message: 'hello world'
    }
  )
foodTable ={
  users:{
    nick: "noodles",
    tom: "bread"
  }
}


firebase.database().ref('/').set(foodTable)
//firebase.database().ref('/foodTable/users/alex').set("berrys")
//firebase.database().ref('/foodTable/users/tom').set("cheese")

//console.log(users+ "likes"+ favFruit)

