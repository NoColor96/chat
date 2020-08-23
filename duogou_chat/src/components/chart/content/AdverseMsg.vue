<template>
  <div class="adverseMsg">
    <table>
      <tr>
        <td rowspan="2">
          <div class="adverseIcon iconTemplate" :class="{clientIcon:role=='server'}"></div>
        </td>
        <td class="nickName">
          <label>
            {{role!='server'?"多购客服":adverseMsg}}
          </label>
          <label>
            &nbsp;&nbsp;{{msgItem.time | TimeFormat()}}
          </label>
        </td>
      </tr>
      <tr>
        <td class="msgDiv">
          <label class="msg">
            {{msgItem.body}}
          </label>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default{
    props:{
      msgItem:Object,
      adverseMsg:String
    },
    computed:{
      ...mapState(["role"])
    }
  }
</script>

<style>
  .adverseIcon{
    background: url('../../../../static/images/server.jpg');
    background-size: 100% 100%;
    position: relative;
    left: -5px;
  }
  .clientIcon{
    background: url('../../../../static/images/myIcon.jpg') !important;
    background-size: 100% 100% !important;
  }
</style>
