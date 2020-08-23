import {SERVER_ID} from "./mutationTyps.js"
export default{
  messages:[
    {
      adverse:{
        id:SERVER_ID,
        name:"多购客服"
      },
      message:[
        {
          body:"多购欢迎您",
          time:new Date(),
          type:"received",
          read:true
        }
      ]
    }
  ],
  //当前聊天界面
  currentMsg:{},
  /* 角色为server时显示客服界面,反之显示客户页面 */
  role:"",
  WebSocket:null,
  modal:''
}
