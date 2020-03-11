var selectBeginDateDom = document.querySelector("#beginTime");
var selectEndDateDom = document.querySelector("#endTime");
var showBeginDateDom = document.querySelector("#beginTimeValue");
var showEndDateDom = document.querySelector("#endTimeValue");
// 初始化时间
var now = new Date();
var nowYear = now.getFullYear();
var nowMonth = now.getMonth() + 1;
var nowDate = now.getDate();
showBeginDateDom.setAttribute("data-year", nowYear);
showBeginDateDom.setAttribute("data-month", nowMonth);
showBeginDateDom.setAttribute("data-date", nowDate);
showEndDateDom.setAttribute("data-year", nowYear);
showEndDateDom.setAttribute("data-month", nowMonth);
showEndDateDom.setAttribute("data-date", nowDate);
// 数据初始化
function formatYear(nowYear) {
  var arr = [];
  for (var i = nowYear - 5; i <= nowYear + 5; i++) {
    arr.push({
      id: i + "",
      value: i + "年"
    });
  }
  return arr;
}
function formatMonth() {
  var arr = [];
  for (var i = 1; i <= 12; i++) {
    arr.push({
      id: i + "",
      value: i + "月"
    });
  }
  return arr;
}
function formatDate(count) {
  var arr = [];
  for (var i = 1; i <= count; i++) {
    arr.push({
      id: i + "",
      value: i + "日"
    });
  }
  return arr;
}
var yearData = function(callback) {
  // settimeout只是模拟异步请求，真实情况可以去掉
  // setTimeout(function() {
  callback(formatYear(nowYear));
  // }, 2000)
};
var monthData = function(year, callback) {
  // settimeout只是模拟异步请求，真实情况可以去掉
  // setTimeout(function() {
  callback(formatMonth());
  // }, 2000);
};
var dateData = function(year, month, callback) {
  // settimeout只是模拟异步请求，真实情况可以去掉
  // setTimeout(function() {
  if (/^(1|3|5|7|8|10|12)$/.test(month)) {
    callback(formatDate(31));
  } else if (/^(4|6|9|11)$/.test(month)) {
    callback(formatDate(30));
  } else if (/^2$/.test(month)) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      callback(formatDate(29));
    } else {
      callback(formatDate(28));
    }
  } else {
    throw new Error("month is illegal");
  }
};
selectBeginDateDom.addEventListener("click", function() {
  var oneLevelId = showBeginDateDom.getAttribute("data-year");
  var twoLevelId = showBeginDateDom.getAttribute("data-month");
  var threeLevelId = showBeginDateDom.getAttribute("data-date");
  var iosSelect = new IosSelect(3, [yearData, monthData, dateData], {
    title: "时间",
    itemHeight: 35,
    oneLevelId: oneLevelId,
    twoLevelId: twoLevelId,
    threeLevelId: threeLevelId,
    showLoading: true,
    callback: function(selectOneObj, selectTwoObj, selectThreeObj) {
      showBeginDateDom.setAttribute("data-year", selectOneObj.id);
      showBeginDateDom.setAttribute("data-month", selectTwoObj.id);
      showBeginDateDom.setAttribute("data-date", selectThreeObj.id);
      showBeginDateDom.innerHTML =
        selectOneObj.id + "-" + selectTwoObj.id + "-" + selectThreeObj.id;
    }
  });
});

selectEndDateDom.addEventListener("click", function() {
  var oneLevelId = showEndDateDom.getAttribute("data-year");
  var twoLevelId = showEndDateDom.getAttribute("data-month");
  var threeLevelId = showEndDateDom.getAttribute("data-date");
  var iosSelect = new IosSelect(3, [yearData, monthData, dateData], {
    title: "时间",
    itemHeight: 35,
    oneLevelId: oneLevelId,
    twoLevelId: twoLevelId,
    threeLevelId: threeLevelId,
    showLoading: true,
    callback: function(selectOneObj, selectTwoObj, selectThreeObj) {
      showEndDateDom.setAttribute("data-year", selectOneObj.id);
      showEndDateDom.setAttribute("data-month", selectTwoObj.id);
      showEndDateDom.setAttribute("data-date", selectThreeObj.id);
      showEndDateDom.innerHTML = selectOneObj.id + "-" + selectTwoObj.id + "-" + selectThreeObj.id;
    }
  });
});
