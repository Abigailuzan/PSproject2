
function showDropdown() {
  document.getElementById('myDropdown').classList.toggle('show');
}


function english(num) {
  findNumber(num);
}

function findNumber(n){
  let letNUM= document.getElementById(n.toString());
  console.log('../media/poto-numbers/'+ n.toString() +'.jpg');
  letNUM.src ='../media/poto-numbers/'+ n.toString() +'.jpg';
  addScoreToUser();
}

window.onload = function () {
  console.log("hi");
  console.log(document.cookie);

  const email = document.cookie.split(',')[0]; // Assuming email is the first cookie
  console.log(email);
  const emailValue = email.substring(email.indexOf('=') + 1);
  console.log(emailValue);

  const name = document.cookie.split(',')[1]; // Assuming email is the first cookie
  const nameValue = name.substring(name.indexOf('=') + 1);
  
  console.log(nameValue);

  let user = localStorage.getItem(emailValue);
  let userjson = JSON.parse(user);
  console.log(user);
  console.log(userjson);
  if(userjson.score === undefined || userjson.score === null){

   
    userjson.score = 0;
   localStorage.setItem(emailValue, JSON.stringify(userjson));
 
  

  }

  // Update DOM
  document.getElementById('username').innerHTML = "שלום " + nameValue + "\t ניקוד: " + userjson.score;
}


function addActionToUser() {
  const email = document.cookie.split(',')[0]; //key value 0 = email
  const emailvalue = email.substring(email.indexOf('=') + 1);
  let user = localStorage.getItem(emailvalue);
  let userjson = JSON.parse(user);
  console.log(userjson.actions + userjson.name);
  const enterGameDate = new Date();
  userjson.actions[userjson.counter++] = {time: enterGameDate.toString() , action: "משחק למידה שלב 1"};
  window.localStorage.setItem(emailvalue, JSON.stringify(userjson));
}
   addActionToUser();


   
   function addScoreToUser() {
    console.log("addScoreToUser");
    const email = document.cookie.split(',')[0]; // Assuming email is the first cookie
    const emailValue = email.substring(email.indexOf('=') + 1);
    let user = localStorage.getItem(emailValue);

    if (user) { // Check if user data exists
        let userJson = JSON.parse(user);
        userJson.score = (userJson.score || 0) + 1; // Increment score, defaulting to 0 if it's not already set
        window.localStorage.setItem(emailValue, JSON.stringify(userJson));

        // Update the score display
        updateScoreDisplay(userJson.name,userJson.score);
    }
}

function updateScoreDisplay(name,newScore) {
    document.getElementById('username').innerHTML = "שלום " + name + "\t ניקוד: " + newScore;

}
function resetScore() {
  const email = document.cookie.split(',')[0]; // Assuming email is the first cookie
  const emailValue = email.substring(email.indexOf('=') + 1);
  let user = localStorage.getItem(emailValue);

  if (user) { // Check if user data exists
      let userJson = JSON.parse(user);
      userJson.score = 0; // Reset score to 0
      window.localStorage.setItem(emailValue, JSON.stringify(userJson)); // Save updated user data to localStorage

      // Update the score display
      updateScoreDisplay(userJson.name, userJson.score);
  } else {
      console.log("No user found in localStorage to reset score for.");
  }
}

  // JavaScript code to toggle button color
  document.addEventListener('DOMContentLoaded', function() {
    var resetButton = document.getElementById('resetScoreButton');
    if (resetButton) {
        resetButton.addEventListener('click', resetScore);
    }
    var backButton = document.getElementById('backButton'); // Existing code for the back button
});
