import Vue from "vue";
import VueBus from 'vue-bus';
import App from "./App.vue";
import "@/plugins/ant-design-vue.js";
import router from "@/router/router";
import "@assets/css/reset.css";
import store from "@/store";
 

Vue.config.productionTip = false;
// ----------全局配置
// -------------------引用bus
Vue.use(VueBus);
// ---- 生产模式下消除console
if (process.env.NODE_ENV == "production") {
  console.log = () => {};
}

// ----- 引用$bus (用作主干方法集成，便于全局调用)
import VueBus from "./bus/index.js";
Vue.use(VueBus);

// ----------全局配置AntDesignVue
import { Modal, Spin, Message } from "ant-design-vue";
Vue.prototype.$error = Modal.error;
Vue.prototype.$info = Modal.info;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$spin = Spin;




Message.config({
  top: `10px`,
  duration: 2,
  maxCount: 3
});
Vue.prototype.$message = Message;
// ----------引用阿里图库字体图标
import "@assets/font/font.css";


window.Vue = Vue;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
