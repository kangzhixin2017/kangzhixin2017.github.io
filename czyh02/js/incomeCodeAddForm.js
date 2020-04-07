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
function handleClick() {
  toast.confirm("添加成功，快去抢单吧！", "", [{ text: "确定", color: "#4795EF" }], function(val) {
    console.log(val);
  });
}

// 省市选择
var selectContactDom = document.querySelector("#area");
var showContactDom = document.querySelector("#areaValue");
// var contactProvinceCodeDom = $("#contact_province_code");
// var contactCityCodeDom = $("#contact_city_code");
selectContactDom.addEventListener("click", function() {
  var oneLevelId = showContactDom.getAttribute("data-province-code");
  var twoLevelId = showContactDom.getAttribute("data-city-code");
  // var threeLevelId = showContactDom.attr("data-district-code");
  var iosSelect = new IosSelect(2, [iosProvinces, iosCitys], {
    title: "地址选择",
    itemHeight: 35,
    relation: [1],
    oneLevelId: oneLevelId,
    twoLevelId: twoLevelId,
    // threeLevelId: threeLevelId,
    callback: function(selectOneObj, selectTwoObj) {
      // contactProvinceCodeDom.val(selectOneObj.id);
      // contactProvinceCodeDom.attr("data-province-name", selectOneObj.value);
      // contactCityCodeDom.val(selectTwoObj.id);
      // contactCityCodeDom.attr("data-city-name", selectTwoObj.value);

      showContactDom.setAttribute("data-province-code", selectOneObj.id);
      showContactDom.setAttribute("data-city-code", selectTwoObj.id);
      // showContactDom.attr("data-district-code", selectThreeObj.id);
      showContactDom.innerHTML = selectOneObj.value + "-" + selectTwoObj.value;
    }
  });
});
