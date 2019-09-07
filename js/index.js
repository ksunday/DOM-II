// // // Your code goes here
const navmouse = document.querySelector(".nav");
navmouse.addEventListener("mouseover", event => {
  console.log(event);
  navmouse.style.transform = "scale(1.1)";
  navmouse.style.transition = "transform 0.5s";
});
document.addEventListener("keydown", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01; // Restrict scale

  scale = Math.min(Math.max(0.125, scale), 4); // Apply scale transform

  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector(".content-destination");
el.onwheel = zoom;
const sitepics = document.querySelectorAll("img");
sitepics.forEach(image => {
  image.addEventListener("mouseover", event => {
    image.style.transform = "scale(1.3)";
    image.style.transition = "transform 0.5s";
  });

  image.addEventListener("mouseout", event => {
    image.style.transform = "scale(1.0)";
    image.style.transition = "transform 0.5s";
  });

  image.addEventListener("click", event => {
    image.src = "https://i.ytimg.com/vi/i8a3gjt_Ar0/hqdefault.jpg";
    image.alt = "derp";
  });
});

window.addEventListener("load", event => {
  console.log("Welcome to the Rice Fields");
});
window.onload = event => {
  console.log("page is fully loaded");
};
focusMethod = function getFocus() {
  document.getElementById("myTextField").focus();
};
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;
window.scroll({
  top: 1,
  behavior: "smooth"
});
const card = document.querySelector(".btn");

card.addEventListener("dblclick", function(e) {
  card.classList.toggle("large");
});
