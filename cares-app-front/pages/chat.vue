<template>
  <div>
    <div>
      

      <div class="message-body mt-3" >
        <h3>Chat</h3>
        <h5>Bienvenid@ {{currentUser.firstname }}!</h5>
        <div class="card">
          <div class="card-body">
            <div
              class="border pl-2 pt-1 ml-2 message-text mb-2"
              v-for="(message, index) in messages"
              :key="index"
            >
              <span class="mg-text">{{ message.username }}</span>
              <p class="message pt-1">{{ message.text }}</p>
            </div>
          </div>
        </div>
        <input v-model="showMessage" type="text" class="mt-3 mr-2 pl-2 pr-2" />
        <button class="btn btn-primary" @click="sendMessage">enviar</button>
      </div>
    </div>
  </div>
</template>

 <script>
export default {
  name: "chat",
  data() {
    return {
      userName: "",
      name: null,
      showMessage: "",
      messages: [],
    };
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
  methods: {
    updateUsername() {
      this.name = this.userName;
      console.log(this.userName);
      this.userName = "";
    },
    async sendMessage() {
      const message = {
        text: this.showMessage,
        username: this.currentUser.firstname,
      };
      const messageRef = this.$fire.database.ref("messages")
      console.log(messageRef)
      messageRef.push(message);
      this.showMessage = "";
    },
  },
  async mounted() {
    console.log("Mounted")
    const itemsRef = this.$fire.database.ref("messages");
    const snapshot = await itemsRef.once("value")
    console.log("====>", snapshot.val())
    itemsRef.on('value', snapshot => {
      console.log("=======>", snapshot.val())
      this.messages=snapshot.val()
    })
    console.log("End mounted")
  },
};
</script> 