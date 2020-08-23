<template>
  <div class="duogouChart">
    <Modal></Modal>
    <MessageList v-if="$store.state.role=='server'"></MessageList>
    <Chart></Chart>
  </div>
</template>

<script>
  import Chart from "./components/Chart.vue"
  import MessageList from "./components/MessageList.vue"
  import Modal from "./components/Modal.vue"
  import axios from "axios"
  import {mapState} from "vuex"
  export default {
    components: {
      Chart,
      MessageList,
      Modal
    },
    mounted: function(){
      //挂载后就连接websocket
      this.$store.dispatch("connectWebSocket").value
    },
    beforeDestroy(){
      this.$store.dispatch("closeConnect");
    },
  }
</script>

<style>
  .duogouChart {
    display: flex;
    margin: auto;
  }

  .iconTemplate {
    width: 30px;
    height: 30px;
    border: 1px solid #b0cde4;
    border-radius: 100%;
  }
  .dim{
    filter: blur(3px);
  }
</style>
