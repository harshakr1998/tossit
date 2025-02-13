"use strict";

const clickToss = document.getElementById("clickToToss");
const overlay = document.querySelector(".overlay");
const tossResult = document.querySelector(".toast-body");

let toss = 0;

const getToss = function () {
  let match = Math.trunc(Math.random() * 2) + 1;
  console.log(match);
  toss = match;
  return toss === 1 ? "Heads" : "Tails";
};

document.getElementById("clickToToss").addEventListener("click", function () {
  spinCircle();
  let result = getToss();
  result === "Heads" ? showToast(result) : showToast(result);
});

const showToast = function (result) {
  var toastEl = document.getElementById("liveToast");
  var toast = new bootstrap.Toast(toastEl);
  document.getElementById("overlay").style.display = "block";
  tossResult.textContent = result;
  toast.show();
};

document
  .getElementById("liveToast")
  .addEventListener("hidden.bs.toast", function () {
    document.getElementById("overlay").style.display = "none";
    toss = 0;
  });

function spinCircle() {
  var circle = document.getElementById("coin-image");
  circle.classList.add("spin-vertical");

  // Remove class after animation for repeated clicks
  setTimeout(() => circle.classList.remove("spin-vertical"), 1000);
}
