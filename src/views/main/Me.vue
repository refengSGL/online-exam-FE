<template>
  <div class="content-bg me">
    <div class="tab-title">
      <div class="tabTitle-item active">个人中心</div>
    </div>
    <div class="tab-item">
      <div class="userInfo">
        <div class="item">
          <span class="title">用户Id :</span>
          <div class="con">U{{ userData.userId }}</div>
        </div>
        <div class="item">
          <span class="title">用户名 :</span>
          <div class="con">{{ userData.userName }}</div>
        </div>
        <div class="item">
          <span class="title">学 号 :</span>
          <div class="con">{{ userData.number }}</div>
        </div>
        <div class="item">
          <span class="title">手机号码 :</span>
          <div class="con">{{ userData.phone }}</div>
        </div>
        <div class="item">
          <span class="title">性 别 :</span>
          <div class="con sex">{{ userData.sex }}</div>
        </div>
        <div class="item">
          <span class="title">创建时间 :</span>
          <div class="con">{{ userData.createDate }}</div>
        </div>
        <div class="item">
          <span class="title">工 作 :</span>
          <div class="con work">{{ userData.work }}</div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
import "@/assets/less/my_tab.less";
import "@/assets/less/main/me.less";

export default {
  name: "Me",
  data() {
    return {
      userData: [],
      token: "",
      autoUpload: true,
    };
  },
  created() {
    this.user_id = this.$root.user_id;
    this.token = localStorage.getItem("_token");
    this.getUserData();
  },

  methods: {
    // 获取用户信息
    async getUserData() {
      const res = await this.$http.get(this.$api.user.getUserById);
      this.userData = res.data;
    },
  },
};
</script>

<style lang="less" scoped>
</style>