<template>
  <div class="MsgItem" :class="currentMsg.adverse.id===item.adverse.id?className:''" @click="detail(index)">
    <table>
      <tr>
        <td class="UserTd">
          {{item.adverse.name}}
        </td>
        <td class="hintTd">
          <div class="hint" v-if="unreadCount">
            {{unreadCount>99?'99+':unreadCount}}
          </div>
        </td>
      </tr>
      <tr>
        <td class="MsgContentTd">
          {{item.message[item.message.length-1].body}}
        </td>
        <td class="TimeTd">
          {{item.message[item.message.length-1].time | TimeFormat}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import {mapState,mapGetters} from "vuex"
  export default{
    data(){
      return {
        className:'currentItem'
      }
    },
    computed:{
      ...mapState(["currentMsg"]),
      unreadCount:function(){
        return this.$store.getters.unreadCount(this.item)
       }
      },
    props:{
      item:Object,
      index:Number
    },
    methods:{
      detail(index){
         this.$store.dispatch("preSetCurrentMsg",index)
      }
    }
  }
</script>

<style>
  .MsgItem{
    height: 65px;
    border-bottom: 1px solid lightgrey;
  }
  .MsgItem table td{
    height: 32px;
  }
  .MsgItem:hover{
    background: #fbfbfb;
  }
  .UserTd{
    font-size: 16px;
    color: black;
  }
  .MsgContentTd{
    font-size: 13px;
    color: gray;
    min-width: 167px;
    width: 167px;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    line-height: 32px;
  }
  .TimeTd{
    font-size: 8px;
    color: lightgray;
    text-align: end;
    width: 70px;
    padding-right: 5px;
  }
  .UserTd,.MsgContentTd{
    padding-left: 5px;
  }
  .hintTd{
    width: 70px;
    padding-right: 5px;
    text-align: end;
  }
  .hint{
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: red;
    color: white;
    font-size: 8px;
    text-align: center;
    line-height: 20px;
    display: inline-block;
  }

  .currentItem{
    background-color: #f5f5f5;
  }
</style>
