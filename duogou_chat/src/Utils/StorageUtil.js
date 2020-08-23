import {SERVER_ID} from "../store/mutationTyps.js"
export default{
  saveMsg(messages){
    window.localStorage.setItem([SERVER_ID],JSON.stringify(messages));
  },
  readMsg(){
    return JSON.parse((window.localStorage.getItem([SERVER_ID])||'[]'));
  }
}
