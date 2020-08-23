<template>
  <div class="newsListDiv" :class="{dim:$store.state.modal}">
    <Header></Header>
    <BodyMsgList></BodyMsgList>
  </div>
</template>

<script>
  import Header from "./MessageList/HeaderMessageList.vue"
  import BodyMsgList from "./MessageList/BodyMsgList.vue"
  export default{
    components:{Header,BodyMsgList}
  }
</script>

<style>
  .newsListDiv{
    width: 240px;
    height: 620px;
    display: inline-block;
    border-left: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    border-radius: 4px 0px 0px 4px;
  }
</style>
