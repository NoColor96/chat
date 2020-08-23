<template>
  <div class="chartingDiv" :class="{dim:$store.state.modal}">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "./chart/Header.vue"
  import Content from "./chart/Content.vue"
  import Footer from "./chart/Footer.vue"
  export default {
    components: {
      Header,
      Content,
      Footer
    }
  }
</script>

<style>
  .chartingDiv {
    width: 500px;
    display: inline-block;
  }
</style>
