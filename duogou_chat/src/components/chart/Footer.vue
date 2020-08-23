<template>
  <div class="footer" :class="{clientFooter:role!='server'}">
    <textarea rows="2" cols="55" :disabled="!editable" class="compileContent" style="resize: none;float: left;" v-model="toBeSend"
      @keyup.enter="send()" ref="contentTextarea"></textarea>
    <button class="btn btn-primary send" :disabled="!editable" @click="send()" ref="sendBtn">发送</button>
  </div>
</template>

<script>
  import {SERVER_ID} from "../../store/mutationTyps.js"
  import {mapState,mapGetters} from "vuex"
  export default {
    data() {
      return {
        toBeSend: ''
      }
    },
    computed: {
      ...mapState(["currentMsg", "role"]),
      ...mapGetters(["editable"])
    },
    methods: {
      send() {
        const content = this.toBeSend.trim();
        if (!content) {
          alert("消息内容不能为空");
          return false;
        }
        const messageObject = {
          adverse: {
            id: this.currentMsg.adverse.id,
            name: this.currentMsg.adverse.name
          },
          message: {
            body: content,
            type: "sent",
            read: true,
            time: new Date()
          }
        }
        this.toBeSend = "";
        this.$store.dispatch("preSend", messageObject);
      }
    },
    updated() {
      this.$refs.contentTextarea.focus();
    }
  }
</script>

<style>
  .footer {
    width: 100%;
    height: 70px;
    border: 1px solid lightgray;
    border-radius: 0px 0px 4px 0px;
    padding: 10px;
    text-align: center;
  }

  .clientFooter {
    border-radius: 0px 0px 4px 4px !important;
  }

  .footer .compileContent {
    border-radius: 6px;
    border: 1px solid #d9edf7;
  }

  .footer .send {
    margin-top: 6px;
  }
</style>
