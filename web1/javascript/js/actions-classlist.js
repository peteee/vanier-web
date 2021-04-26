const myCircle = document.getElementById("circle");

myCircle.addEventListener("click", function () {
  //easier
  //this.classList.toggle("color");

  // more specific, because it checks for the class name first before executing
  if (this.classList.contains("color")) {
    this.classList.remove("color");
  } else {
    this.classList.add("color");
  }
});
