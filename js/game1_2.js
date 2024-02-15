
function showImgAlefBeit(AlefBeit) {
    findAlefBeit(AlefBeit);
  }
  
  function findAlefBeit(l){
    let letAlefBeit= document.getElementById(l.toString());
    letAlefBeit.src ='../media/spenish/'+ l.toString() +'.jpg';
    addScoreToUser();
  }
  
  /* showDropdown toggles between adding and removing the show class, which is used to hide and show the dropdown content */
  function showDropdown() {
    document.getElementById('myDropdown').classList.toggle('show');
  }
  
  function addActionToUser() {
    const email = document.cookie.split(',')[0]; //key value 0 = email
    const emailvalue = email.substring(email.indexOf('=') + 1);

    let user = localStorage.getItem(emailvalue);

    let userjson = JSON.parse(user);

    if (userjson.actions === undefined) {
      userjson.actions = [];
    }
    if (userjson.counter === undefined) {
      userjson.counter = 0;
    }
    console.log(userjson.actions );
    const enterGameDate = new Date();
    userjson.actions[userjson.counter++] = {time: enterGameDate.toString() , action: "משחק למידה שלב 2"};
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
  window.onload = function () {
    const email = document.cookie.split(',')[0]; //key value 0 = email
    const emailvalue = email.substring(email.indexOf('=') + 1);
    let user = localStorage.getItem(emailvalue);
    let userjson = JSON.parse(user);

    console.log(user);  
    document.getElementById('username').innerHTML = "שלום " + userjson.name + "\t ניקוד: " + userjson.score;
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
