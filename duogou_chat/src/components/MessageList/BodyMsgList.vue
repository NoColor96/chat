<template>
  <div class="bodyMsgList">
    <MsgItem v-for="(item,index) in $store.state.messages" :item="item" :index="index" :key="index"></MsgItem>
  </div>
</template>

<script>
  import MsgItem from "./MsgItem.vue"
  import {
    mapState
  } from "vuex"
  export default {
    components: {
      MsgItem
    }
  }
</script>

<style>
  .bodyMsgList {
    width: 100%;
    min-height: 570px;
    height: auto;
    border-left: 1px solid white;
  }
</style>
