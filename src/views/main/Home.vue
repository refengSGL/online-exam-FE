<template>
  <div class="home">
    <TopTab title="首页">
      <div class="tab-content">
        <div class="home-introduce">
          <div>
            <p>欢迎来到我们的基于前后端分离的线上考试系统</p>
            <p>
              前端采用vue框架，搭配vue-cli、axios、vuex、element-ui组件库。
              <br />后端采用springBoot框架、jwt、持久层mybatis，mysql数据库。
            </p>
            <p>在这里你可以切换两种不同的身份</p>
            <p>开始探索吧~</p>
          </div>
        </div>

        <ul class="home-header">
          <li @click="me">个人资料</li>
          <template v-if="$role('student')">
            <li class="message">我的消息</li>
            <li>我是充数的</li>
            <li @click="finishTest">我参加过的考试</li>
          </template>
          <template v-if="$role('teacher')">
            <li @click="createClasses">创建班级</li>
            <li @click="createExam">创建试卷</li>
            <li class="message" @click="myMessage">我的消息</li>
          </template>
        </ul>
        <ul class="home-content">
          <li class="more">暂无消息通知</li>
          <li class="message" @click="myClasses">我的班级</li>
        </ul>
      </div>
    </TopTab>

    <!-- 创建班级对话框 -->
    <CreateClasses ref="createClasses" @success="getClasses()" />
  </div>
</template>

<script>
import TopTab from "../../components/TopTab.vue";
import "../../assets/less/main/home.less";
import { mapMutations } from "vuex";
import CreateClasses from "@/views/classes/components/CreateClasses.vue";

export default {
  name: "Home",
  components: { TopTab, CreateClasses },
  data() {
    return {
      enterClasses_id: "",
    };
  },
  created() {},
  watch: {},
  methods: {
    ...mapMutations(["setActiveName"]),

    // 个人中心
    me() {
      this.$router.push({
        name: "Me",
      });
      this.setActiveName("Me");
    },

    // 我的班级
    myClasses() {
      this.$router.push({
        name: "ClassesList",
      });
      this.setActiveName(["Classes", "ClassesList", "ClassesSpace"]);
    },

    // 我参加过的考试
    finishTest() {
      this.$router.push({
        name: "MyFinishTest",
      });
      this.setActiveName("MyFinishTest");
    },

    // 创建试卷
    createExam() {
      const { href } = this.$router.resolve({
        name: "createExam",
        params: { type: "add" },
      });
      window.open(href, "_blank");
    },

    // 我的消息
    myMessage() {
      this.$router.push({
        name: "MyMessage",
      });
      this.setActiveName("MyMessage");
    },

    // 创建班级
    createClasses() {
      this.$refs.createClasses.dialog = true;
    },
  },
};
</script>
