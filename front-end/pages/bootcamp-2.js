// Indicator
const yearbookMenu = document.querySelector(".yearbook ul");
const marker = document.querySelector(".indicator");
const menuLink = document.querySelectorAll(
  "#journey .timeline-holder .yearbook ul li"
);

if (typeof yearbookMenu != "undefined" && yearbookMenu != null) {
  for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      let menuItemPoition = this.offsetTop;
      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      // Add the active class to the current/clicked button
      this.className += " active";
      marker.style.transform = `translateY(${menuItemPoition}px)`;
    });
  }
}

const journey = document.querySelector("#journey");
document.addEventListener("scroll", function (e) {
  let windowPosition = window.scrollY;
  let positionJourney = journey.offsetTop;
  let positionPath = windowPosition - positionJourney;
  // console.log(journey.scrollTop + position);
  let svgMask = document.querySelector(".mask-path");
  svgMask.style["stroke-dashoffset"] = 10000 - positionPath * 3;
});