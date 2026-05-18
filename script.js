
console.log("Running Sal's Strawberries")

function writeForm(){
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
}

function helloWorld() {
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'hello world'
    }
  )
}
