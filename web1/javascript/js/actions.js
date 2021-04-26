document.addEventListener("DOMContentLoaded", function (event) {
  /**
   * The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
   * Note: The querySelector() method only returns the first element that matches the specified selectors.
   * To return all the matches, use the querySelectorAll() method instead.
   *
   * this demo is about querySelectorAll() method only!
   */

  const rotationElements = document.querySelectorAll(".rotation");
  const threeDElements = document.querySelectorAll(".threeD");

  // to select a single element, use [0], [1], etc.:
  rotationElements[0].style.backgroundColor = "seagreen";
  rotationElements[1].style.backgroundColor = "yellow";

  // to select & modify multiple elements at the same time, use:
  let i;
  for (i = 0; i < rotationElements.length; i++) {
    rotationElements[i].style.transform = "rotate(30deg)";
  }

  let k;
  for (k = 0; k < threeDElements.length; k++) {
    threeDElements[k].style.transform =
      "translate3d(-34px, 9px ,3px) rotateZ(23deg)";
  }

  const clickBox = document.getElementById("box3");
  let boxScale = 1;
  clickBox.addEventListener("click", function () {
    this.style.transform = "scale(" + boxScale + ")";
    //alert("you clicked!");
    boxScale++; // this is the equivalent of: boxScale = boxScale + 1;
  });
});

/**
 * body onload function | Waits for assets (images, css, scripts) to be loaded first
 */
function runMyCode() {
  console.log("All images have been loaded too");
}
