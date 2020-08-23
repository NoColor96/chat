<template>
  <div class="content" ref="contentDiv">
    <div v-if="role!=''" v-for="(msgItem,index) in currentMsg.message" :key="index" :msgItem="msgItem">
      <AdverseMsg v-if="msgItem.type==='received'" :msgItem="msgItem" :adverseMsg="currentMsg.adverse.name"></AdverseMsg>
      <MyMsg v-else-if="msgItem.type==='sent'" :msgItem="msgItem"></MyMsg>
    </div>
  </div>
</template>

<script>
  import AdverseMsg from "./content/AdverseMsg.vue"
  import MyMsg from "./content/MyMsg.vue"
  import {mapState} from "vuex"
  export default{
    components:{
      AdverseMsg,
      MyMsg
    },
    computed:{
      ...mapState(["currentMsg",'messages', 'role'])
    },
    mounted(){
      this.$store.dispatch("preSetCurrentMsg",0);
    },
    updated(){
      //使滚轮保持在最底部
      const contentDiv = this.$refs.contentDiv;
      contentDiv.scrollTop = contentDiv.scrollHeight;
    },
    watch:{
      //监听messages的变化，以便随时保存数据
      messages:{
        deep:true,
        handler:function(value){
          if(this.role=='server')
            this.$store.dispatch("saveMessages");
        }
      }
    }
  }
</script>

<style>
  .content {
    width: 500px;
    height: 500px;
    overflow-y: auto;
    padding: 15px;
    box-sizing: border-box;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
  }
  .content div.adverseMsg.content,div.myMsg{
    margin: 10px 0px;
  }
  .adverseMsg {
    display: flex;
    justify-content: flex-start;
    margin: 10px 0px;
  }
  .msgDiv{
    max-width: 260px;
    word-wrap: break-word;

  }
  .myMsg {
    display: flex;
    justify-content: flex-end;
  }
  .nickName label {
    color: gray;
    font-size: 12px;
  }

  .content .msg {
    font-size: 15px;
  }
  .myMsg .nickName {
    text-align: end;
  }
</style>
