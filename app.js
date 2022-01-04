"use strict";

const btnContainerEl = document.querySelector(".button-container");
console.log(btnContainerEl);
const fetchText = function (e, textId) {
  const reguest = new Request(`${e.target.textContent}.txt`);
  console.log(reguest).then((response) => response.text());
  fetch(request);
};

btnContainerEl.addEventListener("click", fetchText);
