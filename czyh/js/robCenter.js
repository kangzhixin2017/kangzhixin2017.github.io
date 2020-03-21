var startButton = $(".start-button");
var startingButton = $(".starting-button");

if (startButton) {
  startButton.on("click", function(e) {
    e.stopPropagation();
    showConfirm("充值2000押金，才可进行抢单操作", function(val) {
      toggleButton();
    });
  });
}

if (startingButton) {
  startingButton.on("click", function(e) {
    e.stopPropagation();
    showConfirm("恭喜您，抢到一笔充值订单", function(val) {
      toggleButton();
    });
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

function showConfirm(message, callback) {
  toast.confirm(message, "", [{ text: "确定", color: "#000" }], callback);
}
