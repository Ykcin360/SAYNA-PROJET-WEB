/* Variable declaration */
let team1 = document.querySelector(".team1");
let team2 = document.querySelector(".team2");
let myImage = document.querySelector("img");
let myButton = document.querySelector("button");

/* Change the image src when I click it */
myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc == "images/dota-bg.jpg") {
    myImage.setAttribute("src", "images/dota-bg2.jpg");
  } else {
    myImage.setAttribute("src", "images/dota-bg.jpg");
  }
});

/* Change the opponent team name by clicking the button */
function setTeam() {
  let teamName = prompt("Set the opponent team name");
  localStorage.setItem("teamName", teamName);
  team2.textContent = teamName;
}

if (!localStorage.getItem("teamName")) {
  setTeam();
} else {
  let storedTeam = localStorage.getItem("teamName");
  team2.textContent = storedTeam;
}

myButton.addEventListener("click", function () {
  setTeam();
});

/* Set the value of team1 */
team1.textContent = "Black Bird";
