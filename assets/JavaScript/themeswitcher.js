document.addEventListener("DOMContentLoaded", function() {
var themeSwitcher = document.querySelector("#themeSwitcher");
var navBar = document.querySelector(".nav-wrapper");
var mainBackground = document.querySelector("body");
var userInput = document.querySelector(".search");
var searchBar = document.querySelector(".elementsContainer");

var mode = "light";

themeSwitcher.addEventListener("click", function() {

  if (mode === "light") {
    mode = "dark";
    console.log("switching to dark");
    navBar.classList.add("dark-accents");
    navBar.classList.remove("light-accents");
    mainBackground.classList.add("dark-main");
    mainBackground.classList.remove("light-main");
    userInput.classList.add("dark-text");
    userInput.classList.remove("light-text");
    searchBar.classList.add("dark-searchbar");
    searchBar.classList.remove("light-searchbar");
  }

  else {
    mode = "light";
    console.log("switching to light");
    navBar.classList.add("light-accents");
    navBar.classList.remove("dark-accents");
    mainBackground.classList.add("light-main");
    mainBackground.classList.remove("dark-main");
    userInput.classList.add("light-text");
    userInput.classList.remove("dark-text");
    searchBar.classList.add("light-searchbar");
    searchBar.classList.remove("dark-searchbar");
  }
});
});
