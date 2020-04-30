var data = [{
		id: "中国银行",
		value: "中国银行"
	},
	{
		id: "中国民生银行",
		value: "中国民生银行"
	},
	{
		id: "泉州银行",
		value: "泉州银行"
	},
	{
		id: "厦门国际银行",
		value: "厦门国际银行"
	},
	{
		id: "建设银行",
		value: "建设银行"
	}
];
//如果需要从外面传
var Data
var img = document.querySelector("#cardTypeimg");
var showDom = document.querySelector("#cardType"); // 绑定一个触发元素
var valDom // 绑定一个存储结果的元素

showDom.addEventListener("click", function() {
	// 添加监听事件
	var val = showDom.dataset["id"]; // 获取元素的data-id属性值
	var title = showDom.dataset["value"]; // 获取元素的data-value属性值
	// 实例化组件
	Data ? valDom = document.querySelector("#cardTypeValue") : valDom = document.querySelector("#cardType");
	
	var example = new IosSelect(
		1, // 第一个参数为级联层级，演示为1
		[Data ? Data: data], // 演示数据
		{
			container: ".container", // 容器class
			title: "银行卡", // 标题
			itemHeight: 50, // 每个元素的高度
			itemShowCount: 3, // 每一列显示元素个数，超出将隐藏
			oneLevelId: val, // 第一级默认值
			callback: function(selectOneObj) {
				// 用户确认选择后的回调函数
				valDom.value = selectOneObj.id;
				valDom.innerHTML = selectOneObj.value;
				valDom.dataset["id"] = selectOneObj.id;
				valDom.dataset["value"] = selectOneObj.value;
				img.src = selectOneObj.icon
			}
		}
	);
});