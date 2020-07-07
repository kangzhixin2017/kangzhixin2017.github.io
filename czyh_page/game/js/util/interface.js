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
		msg:'提交填写信息'
	}
}