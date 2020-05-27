<template>
  <div class="about">
    <div class="header">
      <img @click="back()" src="../assets/back.png" alt />
      <div class="title">
        <img :src="data.logo_png" alt />
        <div>{{data.symbol}}</div>
      </div>
    </div>
    <div class="massage">
      <div class="money1">
        <span>￥</span>
        {{data.price_cny}}
      </div>
      <div class="money2">
        <div class="left">
          ≈${{data.price_usd}}
          <span>+￥234234.23 +{{data.percent_change_24h}}%</span>
        </div>
        <div class="right">总市值:￥2342亿</div>
      </div>
      <div class="item">
        <div class="left">
          <div class="msg">
            <div class="name">24H</div>
            <div class="value">￥876876</div>
          </div>
          <div class="msg">
            <div class="name">24低</div>
            <div class="value">￥876876</div>
          </div>
          <div class="msg">
            <div class="name">初始价格</div>
            <div class="value">￥876876</div>
          </div>
          <div class="msg">
            <div class="name">历史最高</div>
            <div class="value">￥876876</div>
          </div>
        </div>
        <div class="right">
          <div class="msg">
            <div class="name">24H量</div>
            <div class="value">￥876876</div>
          </div>
          <div class="msg">
            <div class="name">24H额</div>
            <div class="value">￥876876</div>
          </div>
          <div class="msg">
            <div class="name">24H换手</div>
            <div class="value">￥876876</div>
          </div>
          <div class="msg">
            <div class="name">历史最低</div>
            <div class="value">￥876876</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      data: {}
    };
  },
  activated() {
    this.data = this.$route.query.data;
    console.log("接受数据：", this.data);
  },
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.header {
  height: 44px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  /* background-color: red; */
}
.header img {
  width: 20px;
  height: 20px;
  margin-left: 10px;
}
.title {
  display: flex;
  align-items: center;
}
.title img {
  width: 20px;
}
.title div {
  margin-left: 5px;
}
.massage .money1 {
  font-size: 30px;
  color: #008659;
  line-height: 45px;
  font-weight: bold;
  margin-left: 10px;
  /* background-color: red; */
  padding-top: 5px;
}
.massage .money1 span {
  font-size: 14px;
}
.massage .money2 {
  display: flex;
  justify-content: space-between;
  line-height: 13px;
  font-size: 13px;
  margin-bottom: 5px;
}
.massage .money2 .left {
  margin-left: 10px;
}
.massage .money2 .left span {
  color: #008659;
}
.massage .money2 .right {
  margin-right: 10px;
}
.massage .item {
  display: flex;
  padding-bottom: 10px;
}
.massage .item .left {
  width: 50%;
}
.massage .item .right {
  width: 50%;
  border-left: 1px solid #e0e0e0;
}
.massage .item .left .msg,
.massage .item .right .msg {
  display: flex;
  justify-content: space-between;
  line-height: 16px;
  font-size: 13px;
}
.massage .item .left .msg .name {
  margin-left: 10px;
  color: #666666;
}
.massage .item .left .msg .value {
  margin-right: 10px;
}
.massage .item .right .msg .name {
  margin-left: 10px;
  color: #666666;
}
.massage .item .right .msg .value {
  margin-right: 10px;
}
</style>