"use strict";

const btnContainerEl = document.querySelector(".button-container");
console.log(btnContainerEl);
const fetchText = function (e, textId) {
  const reguest = new Request(`${e.target.textContent}.txt`);
  fetch(reguest)
    .then((response) => response.text())
    .then((text) => navigator.clipboard.writeText(text));
};

btnContainerEl.addEventListener("click", fetchText);
