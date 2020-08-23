import state from "./state.js"
import mutations from "./mutations.js"
import storage from "../Utils/StorageUtil.js"
import {SET_CURRENT_MSG,ADD_MSG,SET_ROLE,SERVER_ID} from "./mutationTyps.js"
export default{
  preSetCurrentMsg({commit},index){
    commit(SET_CURRENT_MSG,{index});
  },
  //发送
  preSend({commit},messageObject){
    state.WebSocket.send(JSON.stringify(messageObject))
    commit(ADD_MSG,{messageObject});
  },
  //接收
  receivedMsg({commit},messageObject){
    commit(ADD_MSG,{messageObject});
  },
  preSetRole({commit,dispatch},role){
    //如果角色是客服，那么就从storage中获取消息记录
    if(role=='server'){
      dispatch('fromStorage');
    }
    commit(SET_ROLE,{role});
  } ,
  connectWebSocket({dispatch}){
     if("WebSocket" in window){
       //获取地址栏中的参数(作为uid)
       const uid = window.location.href.split("t=")[1];
       if(!uid||uid=='.'||uid=='/'||uid=='\\'){
         dispatch("roleState","error");
         return false;
       }else{
         setTimeout(()=>state.modal = 'loading',100);
         if(uid=='cm9sZT0tMjE1') state.role = 'server';
       }
       /* state.WebSocket = new WebSocket("ws://duogou.hixqz.com/chat/"+uid); */
       state.WebSocket = new WebSocket("wss://"+window.location.host+"/maven-duogou-ssm/chat/"+uid);
       state.WebSocket.onerror = function(){
         //alert("连接错误")
       }
       state.WebSocket.onopen = function(){
         //console.log("链接加入成功");
       }
       state.WebSocket.onmessage = function(event){
         const data = event.data;
         if(data.startsWith("role:")){
           dispatch("roleState",data.split(":")[1]);
         }else{
           let chat = JSON.parse(data);
           dispatch("receivedMsg",chat);
         }
       }
       state.WebSocket.onclose = function(){
         //连接关闭时将角色置空
         state.role = '';
       };

     }else{
       state.modal = 'error';
     }
  },
  fromStorage({commit}){
    state.messages = storage.readMsg();
  },
  //保存messages至storage
  saveMessages(){
    storage.saveMsg(state.messages)
  },
  closeConnect(){
    state.WebSocket.close();
  },
  //根据服务端返回的role采取不同操作
  roleState({dispatch},role){
     switch(role){
       /* alert("当前用户已在别处登录，请退出别处账号后再试"); */
       case 'clash':
        state.modal = 'clash';
        break;
       case 'error':
        state.modal = 'error';
        break;
       case 'notOnline':
        state.modal = 'notOnline';
        break;
       default:{
         //如果role正常，即设置到state，并提示连接成功
         dispatch("preSetRole",role);
         state.modal = 'loaded';
         setTimeout(() => state.modal='',1000);
       }
     }
  }
}
