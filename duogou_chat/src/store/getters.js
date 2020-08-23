import state from "./state.js"
import {SERVER_ID} from "./mutationTyps.js"
export default{
  unreadSumCount:function(state,getters){
    return state.messages.reduce((pre,item) => pre + (getters.unreadCount(item)),0)
  },
  unreadCount:(state) => (role) =>{
    return role.message.reduce((pre,item) => pre + (item.read ? 0 : 1), 0)
  },
  //编辑框与按钮是否可点击
  editable:function(state){
    if (state.role == '' || state.currentMsg.adverse.id == SERVER_ID && state.role == 'server') 
      return false
    else return true;
  }
}
