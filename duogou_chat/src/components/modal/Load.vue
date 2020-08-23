<template>
  <div class="loadDiv">
    <span class="loading" v-if="$store.state.modal=='loading'" ref="loading">
      连接中{{dot}}
    </span>
    <span class="loaded" v-if="$store.state.modal=='loaded'">
      连接成功！<div class="hintDiv success"></div>
    </span>
    <span class="clash" v-if="$store.state.modal=='clash'">
      账号已在其它网页登录&nbsp;&nbsp;<div class="hintDiv info"></div>
    </span>
    <span class="notOnline" v-if="$store.state.modal=='notOnline'">
      客服不在线,请稍后重试&nbsp;&nbsp;<div class="hintDiv warn"></div>
    </span>
    <span class="error" v-if="$store.state.modal=='error'">
      发生错误,请重试&nbsp;&nbsp;<div class="hintDiv danger"></div>
    </span>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        dot:"",
        timer:{}
      }
    },
    methods:{
      loading(){
        if(this.dot.length<3){
          this.dot = this.dot+".";
        }
        else this.dot = "";
        if(!this.$refs.loading){
          clearInterval(this.timer);
        }
      }
    },
    mounted(){
      this.timer = setInterval(this.loading,300)
    }
  }
</script>

<style>
  .loadDiv span{
    line-height: 100px;
    display: inline-block;
    min-width: 61.34px;
    text-align: start;
  }
  .loaded{

  }
  .hintDiv{
    width: 10px;
    height: 10px;
    border-radius: 100%;
    display: inline-block;
  }
  .loaded .success{
    background-color: greenyellow;
  }
  .clash .info{
    background-color: #f1b202;
  }
  .notOnline .warn{
    background-color: #f1d402;
  }
  .error .danger{
    background-color: red;
  }
</style>
