import axios from 'axios'
import Auth from './resources/auth'
import Works from './resources/works'
import User from './resources/users'
import Register from './resources/register'
import Valorations from './resources/valorations'

export default (context, inject) => {
  axios.defaults.baseURL = context.env.baseURL


  

  
    
     
      


    inject('api', {

      auth: new Auth(axios),
      works: new Works(axios),
      register: new Register(axios),
      users: new User(axios),
      valorations: new Valorations(axios),
     
      initSession(token = null) {
        if (token) {
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
      },
      closeSession() {
        axios.defaults.headers.common['Authorization'] = ''
      }
    })
  }
