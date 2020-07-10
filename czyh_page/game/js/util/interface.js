const URL = {
	invite: {
		url: BASE_URL_invite + '/userSubordinateApi/invitePage',
		msg: '我的邀请页面数据',
	},
	config: {
		url: BASE_URL_invite + '/commonApi/conf',
		msg: '获取配置数据',
	},
	sudoku: {
		url: BASE_URL_lottery + '/gameDrawApi/sudokuPage',
		msg: '九宫格抽奖页面'
	},
	draw: {
		url: BASE_URL_lottery + '/gameDrawApi/draw',
		msg: '九宫格点击抽奖'
	},
	drawIOS: {
		url: 'gameDraw/draw',
		msg: 'IOS九宫格点击抽奖'
	},
	drawInvite: {
		url: BASE_URL_lottery + '/gameDrawApi/invitePage',
		msg: '邀请好友助力'
	},
	prizeList: {
		url: BASE_URL_lottery + '/gameDrawApi/myWin',
		msg: '我的奖品列表'
	},
	commitOrder: {
		url: BASE_URL_lottery + '/gameDrawApi/commitOrder',
		msg: '提交填写信息'
	},
	commitOrderIOS: {
		url: 'gameDraw/commitOrder',
		msg: 'IOS提交填写信息'
	},
	turntable: {
		url: BASE_URL_lottery + '/gameDrawApi/luckyTurntablePage',
		msg: '幸运转盘'
	},
	clickDraw: {
		url: BASE_URL_lottery + '/gameDrawApi/draw',
		msg: '转盘点击抽奖'
	},
	blindBox: {
		url: BASE_URL_lottery + '/blindBoxApi/blindBoxInfo',
		msg: '立即购买页面'
	},
	trytry: {
		url: BASE_URL_lottery + '/blindBoxApi/giveWhirl',
		msg: '试一试'
	}
}