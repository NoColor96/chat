<template>
  <div class="myMsg">
    <table>
      <tr>
        <td class="msgDiv myMsgDiv">
          <label class="msg">
            {{msgItem.body}}
          </label>
        </td>
        <td>
          <div class="myIcon iconTemplate" :class="{serverIcon:role=='server'}"></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default{
    props:{
      msgItem:Object
    },
    computed:{
      ...mapState(["currentMsg","role"])
    }
  }
</script>

<style>
  .myIcon{
    background: url('../../../../static/images/myIcon.jpg');
    background-size: 100% 100%;
    position: relative;
    left: 5px;
  }
  .serverIcon{
    background: url('../../../../static/images/server.jpg') !important;
    background-size: 100% 100% !important;
  }
  .myMsgDiv{
    background: #b0d0ea;
    width: auto;
    border-radius: 10px;
    padding: 0px 10px;
    padding-top: 5px;
  }
</style>
