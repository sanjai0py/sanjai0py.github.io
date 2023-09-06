"use strict";
import  "./js/showdown.min.js";


const age = document.getElementById("age");

var converter = new showdown.Converter(),
  text = "# hello, markdown!",
  html = converter.makeHtml(text);

console.log(html);

function calcAge() {
  const currentYear = new Date().getFullYear();
  return currentYear - 2002;
}

age.innerText = calcAge();
