<template>
  <transition name="modal">
    <div class="modalDiv" v-if="$store.state.modal" :class="{clientModalDiv:$store.state.role!='server'}">
       <div class="modal" :class="{serverClient:$store.state.role=='server'}">
          <Load></Load>
       </div>
    </div>
  </transition>
  </template>

<script>
  import Load from "./modal/Load.vue"
  export default{
    components:{Load}
  }
</script>

<style>
  .modalDiv{
    width: 739px;
    height: 620px;
    display: inline-block;
    position: absolute;
    z-index: 1;
  }
  .clientModalDiv{
    width: 500px !important;
  }
  .modal{
    width: 200px;
    height: 100px;
    border-radius: 20px;
    background-color: #eae8e8;
    display:inline-block;
    position: relative;
    top: 230px;
    left: 149px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
  .modalDiv .serverClient{
    left: 389px !important;
  }
  /* 模态窗口过渡动画 */
  .modal-enter-active,.modal-leave-active{
    transition: opacity .9s;
   }
  .modal-enter,.modal-leave-to{
    opacity: 0;
   }
</style>
