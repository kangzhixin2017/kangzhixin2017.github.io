const URL = {
	config: {
		url: BASE_URL_CONFIG + 'commonApi/conf',
		appUrl: 'common/conf',
		appRequest: false,
		msg: '获取配置数据',
	},
	invite: {
		url: BASE_URL_CONFIG + 'userSubordinateApi/invitePage',
		appUrl: 'userSubordinate/invitePage',
		appRequest: false,
		msg: '我的邀请页面数据',
	},
	sudoku: {
		url: BASE_URL_API + 'gameDrawApi/sudokuPage',
		appUrl: 'gameDraw/sudokuPage',
		appRequest: false,
		msg: '九宫格抽奖页面'
	},
	draw: {
		url: BASE_URL_API + 'gameDrawApi/draw',
		appUrl: 'gameDraw/draw',
		appRequest: appRequest,
		msg: '点击抽奖'
	},
	drawInvite: {
		url: BASE_URL_API + 'gameDrawApi/invitePage',
		appUrl: 'gameDraw/invitePage',
		appRequest: false,
		msg: '邀请好友助力'
	},
	prizeList: {
		url: BASE_URL_API + 'gameDrawApi/myWin',
		appUrl: 'gameDraw/myWin',
		appRequest: appRequest,
		msg: '我的奖品列表'
	},
	commitOrder: {
		url: BASE_URL_API + 'gameDrawApi/commitOrder',
		appUrl: 'gameDraw/commitOrder',
		appRequest: appRequest,
		msg: '提交填写信息'
	},
	turntable: {
		url: BASE_URL_API + 'gameDrawApi/luckyTurntablePage',
		appUrl: 'gameDraw/luckyTurntablePage',
		appRequest: false,
		msg: '幸运转盘'
	},
	blindBox: {
		url: BASE_URL_API + 'blindBoxApi/blindBoxInfo',
		appUrl: 'blindBox/blindBoxInfo',
		appRequest: appRequest,
		msg: '立即购买页面'
	},
	trytry: {
		url: BASE_URL_API + 'blindBoxApi/giveWhirl',
		appUrl: 'blindBox/giveWhirl',
		appRequest: false,
		msg: '试一试'
	},
	together: {
		url: BASE_URL_API + 'blindBoxApi/assortedBillPage',
		appUrl: 'blindBox/assortedBillPage',
		appRequest: appRequest,
		msg: '拼单'
	},
	TJorder: {
		url: BASE_URL_API + 'blindBoxApi/commitOrder',
		appUrl: 'blindBox/commitOrder',
		appRequest: appRequest,
		msg: '提交订单'
	},
	QRorder: {
		url: BASE_URL_API + 'blindBoxApi/affirmOrder',
		appUrl: 'blindBox/affirmOrder',
		appRequest: appRequest,
		msg: '确认订单页面'
	},
	payOrder: {
		url: BASE_URL_API + 'blindBoxApi/pay',
		appUrl: 'blindBox/pay',
		appRequest: appRequest,
		msg: '提交支付'
	},
	shareAssortedBillPage: {
		url: BASE_URL_API + 'blindBoxApi/shareAssortedBillPage',
		appUrl: 'blindBox/shareAssortedBillPage',
		appRequest: appRequest,
		msg: '分享拼单页'
	},
	//行情
	getQuotation:{
		url: BASE_URL_API + 'fxhApi/getQuotation',
		appUrl: 'fxh/getQuotation',
		appRequest: false,
		msg: '获取行情数据'
	},
	myQuotation:{
		url: BASE_URL_API + 'fxhApi/myQuotation',
		appUrl: 'fxh/myQuotation',
		appRequest: false,
		msg: '我的自选'
	},
	quotationSort:{
		url: BASE_URL_API + 'fxhApi/quotationSort',
		appUrl: 'fxh/quotationSort',
		appRequest: false,
		msg: '行情排序'
	},
	hotSearch:{
		url: BASE_URL_API + 'fxhApi/hotSearch',
		appUrl: 'fxh/hotSearch',
		appRequest: false,
		msg: '热门搜索'
	},
	search:{
		url: BASE_URL_API + 'fxhApi/search',
		appUrl: 'fxh/search',
		appRequest: false,
		msg: '搜索'
	},
	collect:{
		url: BASE_URL_API + 'fxhApi/collect',
		appUrl: 'fxh/collect',
		appRequest: false,
		msg: '收藏'
	},
	deleteCollect:{
		url: BASE_URL_API + 'fxhApi/deleteCollect',
		appUrl: 'fxh/deleteCollect',
		appRequest: false,
		msg: '删除收藏'
	},
	collectSort:{
		url: BASE_URL_API + 'fxhApi/collectSort',
		appUrl: 'fxh/collectSort',
		appRequest: false,
		msg: '编辑排序'
	}
}