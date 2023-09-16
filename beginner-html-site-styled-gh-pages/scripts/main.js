let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

/**
 * Sets the user name in the local storage and updates the heading text content.
 *
 * @param {string} myName - The user name to be set.
 * @return {undefined} This function does not return a value.
 */
function setUserName() {
  let myName = prompt("Veuillez saisir votre nom.");
  localStorage.setItem("nom", myName);
  myHeading.textContent = "Mozilla est cool, " + myName;
}

if (!localStorage.getItem("nom")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("nom");
  myHeading.textContent = "Mozilla est cool, " + storedName;
}

myButton.addEventListener("click", function () {
  setUserName();
});

let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/chrome-icon.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});
