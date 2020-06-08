var fileUploadEle = $("#fileUpload");
var fileUploadInput = $("#file");

// 点击图标手动触发input元素click事件。
fileUploadEle.on("click", function(e) {
  e.stopPropagation();
  if (fileUploadInput) {
    fileUploadInput[0].click();
  }
});

// 阻止冒泡，防止fileUploadEle元素click事件重复触发
fileUploadInput.on("click", function(e) {
  e.stopPropagation();
});

function handleClickRemit() {
  toast.passwordConfirm(
    "请确认已成功打款",
    "请输入二级密码",
    [
      { text: "取消", color: "#000" },
      { text: "发送", color: "#4795EF" }
    ],
    function(type, val) {
      console.log(type, val);
      if (type === "发送") {
        toast.info("提交成功", 1000);
      }
    }
  );
}
