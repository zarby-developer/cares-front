import jwtDecode from 'jwt-decode'






export const state = () => ({

  isLoading: true,
  token: null,
  user: null,
  messages: [],
  userTargedId: null,
  firebaseConfig:{
    apiKey: "AIzaSyD3nnwMTS6s95xhZlNctB6cjSEq9qhyT68",
    authDomain: "cares-jobs.firebaseapp.com",
    databaseURL: "https://cares-jobs-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cares-jobs",
    storageBucket: "cares-jobs.appspot.com",
    messagingSenderId: "818409067708",
    appId: "1:818409067708:web:7cea0a2e300e525b7becb9",
    measurementId: "G-6MK1WGQTVV"
  }
})
export const mutations ={
  saveToken(state, token = null){
    state.token = token

    if(token){
      state.user = jwtDecode(token)
    }

    if(!token){
      state.user = null
    }
  },
  
 
}
export const actions = {
  //primer parámetro contexto de VUEX
  //segundo parámetro contexto de NUXT


  login(context, token){
    if(token !== null){
      localStorage.setItem("jwt-token", token)

     

      //configuro axios
       this.$api.initSession(token) 
    }

    context.commit('saveToken', token)
  },
 
  
  logout(context){
    localStorage.removeItem("jwt-token")
    

    //configuro axios
     this.$api.closeSession()

    context.commit('saveToken')
  },
  
}
export const getters = {
  getMessages: (state) => {
    return state.messages
  },
  isAuth(state){
    return state.token !== null && state.token !== ""
  },
  token(state){
    return state.token
  },
  currentUser(state){
    return state.user
  },
}
