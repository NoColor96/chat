<template>
  <div class="header" :class="{clientHeader:role!='server'}">
    <div class="server">
      <span v-if="role=='server'">
        {{currentMsg.adverse.name}}
      </span>
      <span v-else-if="role!=''">
        多购客服
      </span>
      <span v-else>
        连接中...
      </span>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default{
    computed:{
      ...mapState(["currentMsg","role"])
    }
  }
</script>

<style>
	.header {
	  width: 100%;
	  height: 50px;
	  border-radius: 0px 4px 0px 0px;
    background: #337ab7;
    color: white;
    text-align: center;
	}
  .clientHeader{
    border-radius: 4px 4px 0px 0px !important;
  }
  .server {
    line-height: 50px;
  }

</style>
