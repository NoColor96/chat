<template>
  <div class="headerMsgList">
    <div class="headerIcon iconTemplate">
    </div>
    <label class="msgTotal">消息({{unreadSumCount}})</label>
  </div>
</template>

<script>
  import {mapGetters} from "vuex"
  export default{
    computed:{
      ...mapGetters(["unreadSumCount"])
    }
  }
</script>

<style>
  .headerMsgList{
    height: 50px;
    background-color: #89b4d8;
    text-align: center;
    border-left: 1px solid radius;
    border-radius: 4px 0px 0px 0px;
  }
  .msgTotal{
    color: white;
    line-height: 50px;
    font-size: 14px;
    margin-left: -35px;
  }
  .headerIcon{
    display: inline-block;
    float: left;
    margin-left: 5px;
    margin-top: 7px ;
    background: url(../../../static/images/server.jpg);
    background-size: 100% 100%;
  }
</style>
