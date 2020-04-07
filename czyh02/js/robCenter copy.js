var startButton = $(".start-button");
var startingButton = $(".starting-button");

if (startButton) {
  startButton.on("click", function(e) {
    e.stopPropagation();
    toggleButton();
  });
}

if (startingButton) {
  startingButton.on("click", function(e) {
    e.stopPropagation();
    toggleButton();
  });
}

function toggleButton() {
  if (startingButton) {
    startingButton[0].classList.toggle("hide");
  }
  if (startButton) {
    startButton[0].classList.toggle("hide");
  }
}
