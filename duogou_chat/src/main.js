import Vue from "vue"
import App from "./App.vue"
import store from "./store/store.js"
import Moment from "moment"
Vue.filter("TimeFormat",function(data,format="MM/DD HH:mm"){
  if(data instanceof String) return data;
  return Moment(data).format(format);
});

new Vue({
  el:"#app",
  components:{App},
  template:"<App/>",
  store
});