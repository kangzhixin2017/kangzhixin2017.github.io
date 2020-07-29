var mask = {
	type1: function(img, name, num, callback) {
		$('body').append(`<div id="mask" style="display: flex;align-items: center;justify-content: center;position: fixed;top: 0;left: 0;width: 100vw;z-index: 99999999999999999;height: 100vh;background-color: rgba(0, 0, 0, .5);">
				<div class="item" style="position: relative;">
					<img style="width: 3.03rem;height: 3.55rem;" src="../img/buy_bg5.png" />
					<img class="tryImg" style="position: absolute;top: .5rem;left: 1.04rem;width: .95rem;height: 1.9rem;display: block;" src="${img}" />
					<div style="position: absolute;top: 2.7rem;width: 100%;text-align: center;font-size: .14rem;color: #333333;font-weight: bold;">恭喜你获得了：<span class="tryName">${name}</span></div>
					<div style="position: absolute;top: 3.15rem;font-size: .14rem;color: #FFFFFF;font-weight: bold;width: 100%;text-align: center;">编号：<span class="tryNum">${num}</span></div>
					<div id='btn' style="width: 1.1rem;font-size: .14rem;line-height: .35rem;text-align: center;color: white;background-color: #FA9D29;border-radius: .175rem;margin: .1rem auto 0;">确定</div>
				</div>
			</div>`)
		document.getElementById('btn').addEventListener('click', function(event) {
			event.stopPropagation();
			document.body.removeChild(document.getElementById('mask'));
			callback("确认");
		});
		document.getElementById('mask').addEventListener("touchmove", function(event) {
			event.preventDefault();
		});
	},
	type2: function(callback) {
		$('body').append(`<div id="mask" style="position: fixed;width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center;z-index: 9999999999;background-color: rgba(0, 0, 0, .5);top: 0;left: 0;">
				<div style="width: 2.7rem;background-color: white;border-radius: 8px;padding-top: .2rem;">
					<div style="width: 100%;text-align: center;font-size: .16rem;line-height: .22rem;color: #333333;">当前积分不足</div>
					<div style="color: #666666;font-size: .14rem;line-height: .2rem;width: 100%;text-align: center;margin-top: .14rem;">去首页做任务可获得更多积分</div>
					<div id = 'btn' style="margin-top: .2rem;width: 100%;line-height: .44rem;border-top: 1px solid #E9E9E9;text-align: center;">知道了</div>
				</div>
			</div>`)
		document.getElementById('btn').addEventListener('click', function(event) {
			event.stopPropagation();
			document.body.removeChild(document.getElementById('mask'));
			callback("知道了");
		});
		document.getElementById('mask').addEventListener("touchmove", function(event) {
			event.preventDefault();
		});
	},
	type3: function(callback) {
		$('body').append(`<div id="mask"  style="position: fixed;width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center;z-index: 9999999999;background-color: rgba(0, 0, 0, .5);top: 0;left: 0;">
				<div style="position: relative;width: 2.7rem;background-color: white;border-radius: 8px;padding-top: .2rem;padding-bottom: .18rem;">
					<img id='back' style="width: .2rem;height: .2rem;display: block;position: absolute;right: .12rem;top: .12rem;" src="../img/mask_back.png" />
					<img src="../img/mask_bg2.png" style="width: .42rem;height: .42rem;display: block;margin: 0 auto;" />
					<div style="font-size: .16rem;line-height: .22rem;color: #666666;margin-top: .16rem;width: 100%;text-align: center;">很遗憾！没有中奖</div>
					<div id = 'btn' style="width: 2.3rem;line-height: .42rem;background-color: #FFDC24;border-radius: .21rem;text-align: center;margin: .30rem auto 0;font-size: .15rem;color: #333333;">再接再厉</div>
				</div>
			</div>`)
		document.getElementById('btn').addEventListener('click', function(event) {
			event.stopPropagation();
			document.body.removeChild(document.getElementById('mask'));
			callback("再接再厉");
		});
		document.getElementById('back').addEventListener('click', function(event) {
			event.stopPropagation();
			document.body.removeChild(document.getElementById('mask'));
			callback("back");
		});
		document.getElementById('mask').addEventListener("touchmove", function(event) {
			event.preventDefault();
		});
	},
	type4: function(callback) {
		$('body').append(`<div id="mask" class="jf_mask4" style="position: fixed;width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center;z-index: 9999999999;background-color: rgba(0, 0, 0, .5);top: 0;left: 0;">
				<div style="position: relative;width: 2.7rem;height: 2.72rem;background: url(../img/mask_bg3.png) no-repeat;background-size: 100% 100%;background-color: white;border-radius: 8px;padding-top: .2rem;">
					<div style="font-size: .26rem;line-height: .31rem;color: #EE6441;width: 100%;text-align: center;font-weight: bold;">恭喜你中奖啦～</div>
					<img src="../img/jifen.png" style="display: block;height: .7rem;width: .7rem;margin: .38rem auto 0;" alt="" />
					<div class="mask4_jifen" style="width: 100%;text-align: center;font-size: .2rem;line-height: .28rem;color: #333333;margin-top: .02rem;">23积分</div>
					<div id='btn' style="font-weight: bold;width: 2.3rem;line-height: .42rem;background-color: #FFDC24;border-radius: .21rem;text-align: center;margin: .2rem auto 0;font-size: .15rem;color: #333333;">领取</div>
				</div>
			</div>`)
		document.getElementById('btn').addEventListener('click', function(event) {
			event.stopPropagation();
			document.body.removeChild(document.getElementById('mask'));
			callback("领取");
		});
		document.getElementById('mask').addEventListener("touchmove", function(event) {
			event.preventDefault();
		});
	},
	type5: function(msg, callback) {
		$('body').append(`<div id="mask" style="position: fixed;width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center;z-index: 9999999999;background-color: rgba(0, 0, 0, .5);top: 0;left: 0;">
				<div style="width: 2.7rem;background-color: white;border-radius: 8px;padding-top: .2rem;">
					<div style="width: 100%;text-align: center;font-size: .16rem;line-height: .22rem;color: #333333;">提示</div>
					<div style="color: #666666;font-size: .14rem;line-height: .2rem;width: 100%;text-align: center;margin-top: .14rem;">${msg}</div>
					<div id='btn' style="margin-top: .2rem;width: 100%;line-height: .44rem;border-top: 1px solid #E9E9E9;text-align: center;">知道了</div>
				</div>
			</div>`)
		document.getElementById('btn').addEventListener('click', function(event) {
			event.stopPropagation();
			document.body.removeChild(document.getElementById('mask'));
			callback("知道了");
		});
		document.getElementById('mask').addEventListener("touchmove", function(event) {
			event.preventDefault();
		});
	},
	type6: function(msg, callback = null) {
		$('body').append(`<div id='mask1' style="display: flex;width: 100%;justify-content: center;position: fixed;top: calc(100vh / 2);z-index: 9999999999999999999999;pointer-events: none">
				<div class="showmsg" style="line-height: .22rem;margin: 0 auto;padding: .13rem .28rem;background-color: rgba(17, 17, 17, .9);text-align: center;border-radius: 4px;color: white;font-size: .16rem;">${msg}</div>
			</div>`)
		$('#mask1').fadeIn(function() {
			setTimeout(function() {
				$('#mask1').fadeOut(1000, function() {
					document.body.removeChild(document.getElementById('mask1'));
				})
				if(callback) {
					callback()
				}
			}, 2000)
		})
	},
	type7: function(callback) {
		$('body').append(`<div id="mask" style="position: fixed;width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center;z-index: 9999999999;background-color: rgba(0, 0, 0, .5);top: 0;left: 0;">
				<div style="width: 2.7rem;background-color: white;border-radius: 8px;padding-top: .2rem;">
					<div style="width: 100%;text-align: center;font-size: .16rem;line-height: .22rem;color: #333333;font-weight: bold;">支付密码错误，请重试</div>
					<div style="margin-top: .2rem;width: 100%;line-height: .44rem;border-top: 1px solid #E9E9E9;text-align: center;display: flex;">
						<div id='btn1' style="width: 100%;text-align: center;font-size: .15rem;color: #666666;font-weight: bold;">忘记密码</div>
						<div id='btn2' style="width: 100%;text-align: center;border-left: 1px solid #E9E9E9;font-size: .15rem;color: #333333;font-weight: bold;">重试</div>
					</div>
				</div>
			</div>`)
		document.getElementById('btn1').addEventListener('click', function(event) {
			event.stopPropagation();
			document.body.removeChild(document.getElementById('mask'));
			callback("忘记密码");
		});
		document.getElementById('btn2').addEventListener('click', function(event) {
			event.stopPropagation();
			document.body.removeChild(document.getElementById('mask'));
			callback("重试");
		});
		document.getElementById('mask').addEventListener("touchmove", function(event) {
			event.preventDefault();
		});
	},
	type8: function(callback) {
		$('body').append(`<div id="mask" style="position: fixed;width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center;z-index: 9999999999;background-color: rgba(0, 0, 0, .5);top: 0;left: 0;">
				<div style="width: 2.7rem;background-color: white;border-radius: 8px;padding-top: .2rem;">
					<div style="width: 100%;text-align: center;font-size: .16rem;line-height: .22rem;color: #333333;font-weight: bold;padding: 0 .28rem;">确定要离开吗?邀请好友才能大大提高拼单率</div>
					<div style="margin-top: .2rem;width: 100%;line-height: .44rem;border-top: 1px solid #E9E9E9;text-align: center;display: flex;">
						<div id='btn1' style="width: 100%;text-align: center;font-size: .15rem;color: #666666;font-weight: bold;">取消</div>
						<div id='btn2' style="width: 100%;text-align: center;border-left: 1px solid #E9E9E9;font-size: .15rem;color: #333333;font-weight: bold;">确认</div>
					</div>
				</div>
			</div>`)
		document.getElementById('btn1').addEventListener('click', function(event) {
			event.stopPropagation();
			document.body.removeChild(document.getElementById('mask'));
			callback("取消");
		});
		document.getElementById('btn2').addEventListener('click', function(event) {
			event.stopPropagation();
			document.body.removeChild(document.getElementById('mask'));
			callback("确认");
		});
		document.getElementById('mask').addEventListener("touchmove", function(event) {
			event.preventDefault();
		});
	},
	type9: function(callback) {
		$('body').append(`<div id="mask" style="position: fixed;width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center;z-index: 9999999999;background-color: rgba(0, 0, 0, .5);top: 0;left: 0;">
				<div style="width: 2.7rem;background-color: white;border-radius: 8px;padding-top: .2rem;">
					<div style="width: 100%;text-align: center;font-size: .16rem;line-height: .22rem;color: #333333;font-weight: bold;padding: 0 .28rem;">确定删除自选？</div>
					<div style="margin-top: .2rem;width: 100%;line-height: .44rem;border-top: 1px solid #E9E9E9;text-align: center;display: flex;">
						<div id='btn1' style="width: 100%;text-align: center;font-size: .15rem;color: #666666;font-weight: bold;">取消</div>
						<div id='btn2' style="width: 100%;text-align: center;border-left: 1px solid #E9E9E9;font-size: .15rem;color: #333333;font-weight: bold;">确认</div>
					</div>
				</div>
			</div>`)
		document.getElementById('btn1').addEventListener('click', function(event) {
			event.stopPropagation();
			document.body.removeChild(document.getElementById('mask'));
			callback("取消");
		});
		document.getElementById('btn2').addEventListener('click', function(event) {
			event.stopPropagation();
			document.body.removeChild(document.getElementById('mask'));
			callback("确认");
		});
		document.getElementById('mask').addEventListener("touchmove", function(event) {
			event.preventDefault();
		});
	},
	type10: function(callback) {
		$('body').append(`<div id="mask" style="position: fixed;width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center;z-index: 9999999999;background-color: rgba(0, 0, 0, .5);top: 0;left: 0;">
			<div style="width: 3rem;background-color: white;border-radius: 8px;padding: .18rem .16rem .3rem;">
				<div style="display: flex;align-items: center;justify-content: center;">
					<img style="width: .8rem;height: .06rem;display: block;" src="../img/invite_right.png"/>
					<div style="font-size: .16rem;font-weight: bold;color: #0A8DE7;line-height: .22rem;margin: 0 .16rem;">邀请须知</div>
					<img style="width: .8rem;height: .06rem;display: block;" src="../img/invite_left.png"/>
				</div>
				<div style="margin-top: .3rem;">
					<div style="display: flex;font-size: .14rem;line-height: .2rem;">
						<div>1、</div><div>活动期间内V Talk用户通过个人邀请链接邀请好友下载V Talk APP后，好友登录并完成实名认证即视为邀请成功；</div>
					</div>
					<div style="display: flex;font-size: .14rem;line-height: .2rem;margin-top: .1rem;">
						<div>2、</div><div>活动奖励内容后台可配置；</div>
					</div>
					<div style="display: flex;font-size: .14rem;line-height: .2rem;margin-top: .1rem;">
						<div>3、</div><div>若您的邀请已达到上限或不符合任务规则等，您将无法获得对应奖励；</div>
					</div>
				</div>
				<div id='btn1' style="width: 2.19rem;line-height: .38rem;text-align: center;background-color: #0A8DE7;font-size: .15rem;color: white;margin: .3rem auto 0;border-radius: 4px;">知道了</div>
			</div>
		</div>`)
		document.getElementById('btn1').addEventListener('click', function(event) {
			event.stopPropagation();
			document.body.removeChild(document.getElementById('mask'));
			callback("知道了");
		});
		document.getElementById('mask').addEventListener("touchmove", function(event) {
			event.preventDefault();
		});
	}
}