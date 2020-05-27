<template>
  <div class="home">
    <div class="header">
      <!-- <img
        src="https://n.sinaimg.cn/tech/transform/520/w300h220/20200403/8c85-irtymmv5597576.gif"
        alt
      />-->
      <div class="top">
        <div>市值排行</div>
      </div>
      <div class="bottom">
        <div class="left">币种/流通市值(￥)</div>
        <div class="center">全球指数(￥)</div>
        <div class="right">24H涨幅</div>
      </div>
    </div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="load" v-if="isloading">
        <van-loading type="spinner" />
      </div>
      <div class="content">
        <div class="list" v-for="(item,key) in list" :key="key" @click="details(item)">
          <div class="left">
            <div class="count">{{key+1}}</div>
            <!-- <div class="count">{{item.rank}}</div> -->
            <div class="name">
              <div class="top">
                <img :src="item.logo_png" alt />
                <div>{{item.symbol}}</div>
              </div>
              <div class="bottom">{{(item.market_cap_cny/100000000).toFixed(2)}}亿</div>
            </div>
          </div>
          <div class="center">
            <div class="item">
              <div class="top">{{item.price_cny}}</div>
              <div class="bottom">${{parseFloat(item.price_usd).toFixed(2)}}</div>
            </div>
          </div>
          <div
            class="right"
            v-show="item.percent_change_24h>0"
            style="color:#008659"
          >+{{item.percent_change_24h}}%</div>
          <div
            class="right"
            v-show="item.percent_change_24h<=0"
            style="color:#eb0000"
          >{{item.percent_change_24h}}%</div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
// @ is an alias to /src
import { Toast } from "vant";
export default {
  name: "Home",
  data() {
    return {
      list: [],
      isLoading: false,
      isloading: true
    };
  },
  mounted() {
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        // 页面被挂起
        // alert("页面被挂起");
      } else {
        // 页面呼出
        // alert("页面呼出");
        this.$socket.emit("connect");
        // this.$socket.emit("getQuotation");
      }
    });
    // console.log(document.documentElement.scrollHeight);
    // window.onscroll = function() {
    //   var scrollTop =
    //     document.documentElement.scrollTop || document.body.scrollTop;
    //   var windowHeight =
    //     document.documentElement.clientHeight || document.body.clientHeight;
    //   var scrollHeight =
    //     document.documentElement.scrollHeight || document.body.scrollHeight;
    //   console.log(
    //     "距顶部" +
    //       scrollTop +
    //       "可视区高度" +
    //       windowHeight +
    //       "滚动条总高度" +
    //       scrollHeight
    //   );
    //   if (scrollTop + windowHeight == scrollHeight) {
    //     //写后台加载数据的函数
    //     console.log(
    //       "距顶部" +
    //         scrollTop +
    //         "可视区高度" +
    //         windowHeight +
    //         "滚动条总高度" +
    //         scrollHeight
    //     );
    //   }
    // };
    // this.$socket.emit("getQuotation");
  },
  sockets: {
    connect() {
      console.log("已连接");
      this.$socket.emit("getQuotation");
    },
    reconnect() {
      this.$socket.emit("connect");
    },
    disconnect() {
      console.log("断开连接");
      this.$socket.emit("reconnect", { reconnect: true });
    },
    quotation(data) {
      this.list = data;
      this.isloading = false;
    }
  },
  methods: {
    onRefresh() {
      this.$socket.emit("connect");
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },
    details(data) {
      console.log(data);
      // this.$router.push({ path: '/about', query: { data: data }});
      // this.$router.push("/about");
    },
    onLoad() {
      console.log("sdf");
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    }
  }
};
</script>
<style>
.header {
  position: sticky;
  top: 0;
  z-index: 9808098;
}
.header .top {
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  width: 100%;
  background-color: #fafafa;
  font-size: 15px;
  line-height: 44px;
  color: #7e7e7e;
  font-weight: bold;
}
.header .top div {
  padding-left: 12px;
  color: #FC7020;
}
.header .bottom {
  display: flex;
  background-color: #fff;
  color: #666666;
  font-size: 14px;
}
.header .bottom .left {
  width: 40%;
  text-align: left;
  margin-left: 12px;
}
.header .bottom .center {
  width: 30%;
  text-align: left;
}
.header .bottom .right {
  width: 30%;
  text-align: right;
  margin-right: 12px;
}
.content {
  padding: 0 12px;
}
.list {
  width: 100%;
  padding: 10px 0;
  display: flex;
}
.list .left {
  width: 40%;
  display: flex;
  align-items: center;
  font-size: 15px;
  line-height: 15px;
}
.list .center {
  width: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* text-align: right; */
}
.list .right {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  font-weight: bold;
}
.list .left .count {
  /* width: 30px; */
  font-weight: bold;
  text-align: center;
  margin-right: 8px;
}
.list .left .name .top,
.list .center .item .top {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-weight: bold;
  /* justify-content: flex-end; */
}
.list .center .item .top {
  justify-content: flex-start;
}
.list .left .name .bottom,
.list .center .item .bottom {
  font-size: 14px;
  line-height: 14px;
  color: #666666;
}
.list .center .item .bottom {
  text-align: left;
}
.list .left .name img {
  width: 16px;
  margin-right: 5px;
}
.load {
  margin: 20px auto;
  display: flex;
  justify-content: center;
}
</style>