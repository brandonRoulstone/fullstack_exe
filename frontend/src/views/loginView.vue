<template>

  <div id="formBody">
    <div class="int">
      Create user!
    </div>

    <div class="login">
      <input type="text"
       name="text"
       id="FloatingText"
       placeholder="name"
       required
       v-model="name"
       class="inpt"
      >
      <br>
      <input type="text" 
        name="age"
        id="floatingAge"
        placeholder="age"
        required
        v-model="age"
        class="inpt"
        >

        <br>

        <button type="submit" @click="submitData()" class="btn">Create User</button>
        <!-- <button type="submit" @click="editById()" class="btn">Edit User</button> -->

        <div id="eertxt"></div>

    </div>
  </div>
  </template>
  <script>
  export default{
    data(){
      return{
        name: "",
        age: null
      }
    },
    methods : {
      // setMail(){
      //   addEventListener('input', () => {
      //     // this.email = true ? alert("blocked") : console.log("mmm")
      //   });
      // },
      submitData(){
        if(this.name == 0 || this.age == 0){
          
          document.getElementById("eertxt").innerHTML += `<p style="color: red; font-size: 10px;">Input please</p>`
  
        } else{
  
          console.log(this.$data.name);
  
          this.$store.dispatch('fetchData', this.$data) 

          window.location.reload()
  
        }
      }
    }
  }
  </script>
  <style scoped>
  #formBody{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    flex-direction: column;
    background: rgb(0, 0, 0);
  }

  .int{
    color: white;
    font-weight: 600;
    padding-top: 5px;
    text-transform: uppercase;
  }

  .inpt{
    margin: 10px;
    height: 30px;
    text-align: center;
    background: linear-gradient(
      rgb(207, 207, 207), rgb(217, 217, 214)
    );
    box-shadow: 
    inset 10px 10px 10px 10px rgba(101, 98, 98, 0.247)
    ;
    font-weight: 900;
  }

  .btn{
    background: linear-gradient(to left, rgb(5, 111, 51), rgb(0, 255, 51));
    color: rgb(55, 53, 53);
    border: none;
    padding: 5px;
    margin: 5px;
    font-weight: bold;
    border-radius: 30px;
  }
  .btn:hover{
    background: linear-gradient(to left, rgb(0, 255, 51), rgb(113, 194, 0));
    transition: all 0.2s ease-in-out;
    color: rgb(221, 213, 213);
  }
  </style>