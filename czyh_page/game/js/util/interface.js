const URL = {
	config: {
		url: BASE_URL_invite + 'commonApi/conf',
		appUrl: 'common/conf',
		appRequest: false,
		msg: '获取配置数据',
	},
	invite: {
		url: BASE_URL_invite + 'userSubordinateApi/invitePage',
		appUrl: 'userSubordinate/invitePage',
		appRequest: false,
		msg: '我的邀请页面数据',
	},
	sudoku: {
		url: BASE_URL_lottery + 'gameDrawApi/sudokuPage',
		appUrl: 'gameDraw/sudokuPage',
		appRequest: false,
		msg: '九宫格抽奖页面'
	},
	draw: {
		url: BASE_URL_lottery + 'gameDrawApi/draw',
		appUrl: 'gameDraw/draw',
		appRequest: appRequest,
		msg: '点击抽奖'
	},
	drawInvite: {
		url: BASE_URL_lottery + 'gameDrawApi/invitePage',
		appUrl: 'gameDraw/invitePage',
		appRequest: false,
		msg: '邀请好友助力'
	},
	prizeList: {
		url: BASE_URL_lottery + 'gameDrawApi/myWin',
		appUrl: 'gameDraw/myWin',
		appRequest: false,
		msg: '我的奖品列表'
	},
	commitOrder: {
		url: BASE_URL_lottery + 'gameDrawApi/commitOrder',
		appUrl: 'gameDraw/commitOrder',
		appRequest: appRequest,
		msg: '提交填写信息'
	},
	turntable: {
		url: BASE_URL_lottery + 'gameDrawApi/luckyTurntablePage',
		appUrl: 'gameDraw/luckyTurntablePage',
		appRequest: false,
		msg: '幸运转盘'
	},
	blindBox: {
		url: BASE_URL_lottery + 'blindBoxApi/blindBoxInfo',
		appUrl: 'blindBox/blindBoxInfo',
		appRequest: false,
		msg: '立即购买页面'
	},
	trytry: {
		url: BASE_URL_lottery + 'blindBoxApi/giveWhirl',
		appUrl: 'blindBox/giveWhirl',
		appRequest: false,
		msg: '试一试'
	},
	together: {
		url: BASE_URL_lottery + 'blindBoxApi/assortedBillPage',
		appUrl: 'blindBox/assortedBillPage',
		appRequest: false,
		msg: '拼单'
	},
	TJorder: {
		url: BASE_URL_lottery + 'blindBoxApi/commitOrder',
		appUrl: 'blindBox/commitOrder',
		appRequest: appRequest,
		msg: '提交订单'
	},
	QRorder: {
		url: BASE_URL_lottery + 'blindBoxApi/affirmOrder',
		appUrl: 'blindBox/affirmOrder',
		appRequest: appRequest,
		msg: '确认订单页面'
	},
	payOrder: {
		url: BASE_URL_lottery + 'blindBoxApi/pay',
		appUrl: 'blindBox/pay',
		appRequest: appRequest,
		msg: '提交支付'
	},
	shareAssortedBillPage: {
		url: BASE_URL_lottery + 'blindBoxApi/shareAssortedBillPage',
		appUrl: 'blindBox/shareAssortedBillPage',
		appRequest: false,
		msg: '分享拼单页'
	}
}