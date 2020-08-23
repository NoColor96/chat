import state from "./state.js"
import storage from "../Utils/StorageUtil.js"
import {SET_CURRENT_MSG,ADD_MSG,SET_ROLE,SERVER_ID} from "./mutationTyps.js"
export default{
  [SET_CURRENT_MSG](state,{index}){
    state.messages[index].message.forEach((item) => item.read = true);
    state.currentMsg = state.messages[index];
  },
  [ADD_MSG](state,{messageObject}){
    //聊天列表是否已存在该聊天对象
    let isExist = false;

    state.messages.forEach((item) => {
      if(item.adverse.id === messageObject.adverse.id){
        //当接收的消息来自当前聊天对象时，将该消息设置为已读
        if(state.currentMsg.adverse.id === messageObject.adverse.id){
          messageObject.message.read = true;
        }
        item.message.push(messageObject.message);
        isExist = true;
        return false;
      }
    })
    if(!isExist){
      //如果消息列表不存在该对象，即将此消息以数组的形式放进消息列表
      var arr = [];
      arr.push(messageObject.message);
      messageObject.message = arr;
      state.messages.push(messageObject);
    }
  },
  [SET_ROLE](state,{role}){
    state.role = role;
  }
}
