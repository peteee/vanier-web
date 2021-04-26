console.log("L O A D E D ! ;)");
const myIcons = document.querySelectorAll(".icon");
myIcons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    this.classList.toggle("show-me");
  });
});

const myMenu = document.getElementById("menu");
myMenu.addEventListener("click", function () {
  this.classList.toggle("clicked");
});
