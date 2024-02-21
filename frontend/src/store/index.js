import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router';
axios.defaults.withCredentials = true

export default createStore({
  state: {
    ArrData : [],
    loggedIn: false
  },
  getters: {
  },
  mutations: {
    accessDB(state, info){
      state.ArrData = info
    },
    setLogged(state, info){
      state.loggedIn = info
    }
  },
  actions: {
    async fetchData(context, loginDetails){

      try {

        const response = await axios.post("http://localhost:1999/login", loginDetails);

        // context.commit('accessData', response.data);

        console.log(response.data);

      } catch (error) {

        console.error("cant fetch data!", error);

      }

    },

    async fetchArrOfObjs(context){
      try{
        const response = await axios.get('http://localhost:1999/login')
        console.log(response);
        context.commit('accessDB', response.data)
        // console.log(response.data);
      } catch (error){
        console.error('server responded with a 404', error)
      }
    },

    async delFromDB(context, id){
      try {
        const response = axios.delete(`http://localhost:1999/login/${id}`)
        // console.log(response.data)
        window.location.reload()
      } catch (error) {
        console.error('Delete was unsuccessful', error);
      } 
    },


    async editById(context, update){
      try {
        console.log("logged")
        axios.patch(`http://localhost:1999/login/${update.id}`, update)
        window.location.reload()
      } catch (error) {
        console.error(`Failed to edit`, error);
      }
    },

    async SigninNewUser(context, x){
      try {
        console.log(x)
       const response = await axios.post(`http://localhost:1999/users`, x)
       alert(response.data.msg);
       window.location.reload()
      } catch (error){
        console.error(error)
      }
    },

    async onLogged(context, log){
      try {
        console.log(log)
        const response = await axios.post(`http://localhost:1999/logs`, log)
        alert(response.data.msg);
        context.commit('setLogged', true)
        // push is going to keep the browser history of the page
        await router.push('/')
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
    },
    async logout(context){
      // gets all cookie names
      let cookies = $cookies.keys() /// returns an array
      console.log(cookies);
      const {data} = await axios.delete(`http://localhost:1999/logout`)
      alert(data.msg)
      window.location.reload()
    }
  },
  modules: {
  }
})
