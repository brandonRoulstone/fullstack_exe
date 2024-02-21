<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div v-for="db of $store.state.ArrData" v-bind:key="db.id" class="content">
      
      <div class="card" v-bind="id" :value="db.id">
        <div class="cardContent">
          Name : {{ db.name }}
        </div>
        <div class="cardContentTwo">
         Age : {{ db.age }}
        </div>
        <!-- <i class="fa-regular fa-pen-to-square fa-lg" style="color: #ffffff;"></i> -->
        
        <div class="px-2 py-3" id="cols">
          <label for="floatingText" class="fw-bold text-start">Name:</label>
          <input type="text" v-model="name" id="floatingText">
          <label for="floatingAge" class="fw-bold text-start">Age:</label>
          <input type="text" v-model="age" id="floatingAge">
        </div>
        <div class="d-flex justify-content-center">
          <button type="button" class="btn" @click="editById(db.id)" id="btn">Save changes</button>
          <button id="btn" @click="delFriend(db.id)">Delete</button>
        </div>
        <p class="small fw-bold">save changes to user <q>{{db.name}}</q></p>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data(){
    return {
      id: null,
      name: "",
      age: null
    }
  },
  components: {

  },
  computed : {

  },
  methods : {
    delFriend(id){
      console.log(id)
      // passed a payload to actions in store
      // passing data without storing in state
      this.$store.dispatch('delFromDB', id) 
    },
    fetchDB(){
      this.$store.dispatch('fetchArrOfObjs');
    },
    editById(id){
      let object = {
        id: id,
        name: this.name,
        age: this.age
      }
      this.$store.dispatch('editById', object)
      console.log(this.$data, object)
    }
  },
  mounted(){
    this.fetchDB();
    // this.delFriend()
  }
}
</script>
<style scoped>
  .home{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  [data-edit]{
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
  }

  .content{
    margin: 20px;
    background: linear-gradient(rgb(46, 45, 45), rgb(97, 97, 97));
    box-shadow: -2px -2px 10px 2px rgba(222, 222, 222, 0.733), 5px 5px 10px 1px rgba(0, 0, 0, 0.157);
    border-radius: 10px;
    color: whitesmoke;
  }

  #btn{
    background: linear-gradient(rgb(0, 0, 0), rgb(44, 43, 43));
    border-radius: 5px;
    color: white;
    border: none;
    cursor: pointer;
    margin: 5px;
    padding: 4px;
  }

  #cols{
    display: flex;
    flex-direction: column;
  }

  #floatingText{
    margin-bottom: 10px;
  }

  .cardContent{
    font-weight: bold;
    padding: 10px;
  }


  #floatingAge, #floatingText{
    background: black;
    color: black;
  }
  #floatingAge:hover{
    background: rgb(255, 255, 255);
    color: black;
  }
  #floatingText:hover{
    background: rgb(255, 255, 255);
    color: black;
  }

</style>