<template>
    <div class="container">

        <h1 class="fw-bold" id="sign">Sign up</h1>
        logged In:{{ $store.state.loggedIn }}

        <div class="d-flex justify-content-center" id="signupForm">
            <div class="row container w-50" id="innerBorder">
                <input class="mt-3" type="email" name="username" id="floatingEmail" placeholder="email" v-model="username">
                <input class="mb-3 mt-3" type="password" name="password" id="floatingPassword" placeholder="password" v-model="password">
                <div class="border-top border-black pt-1">
                    <button class="w-50 btn bg-black fw-bold text-white m-1" @click="isValidState()">Sign up</button>
                    <button class="w-50 btn bg-black fw-bold text-white m-1" @click="verifyLogIn()">Log in</button>
                </div>
                <div id="eertxt"></div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            username: null,
            password: null
        }
    },
    methods : {
        // performs an action where the user can create acc
        isValidState(){

            if(this.username == 0 || this.password == 0){

                document.getElementById("eertxt").innerHTML += `<p style="color: red; font-size: 10px;">Input please</p>`

            } else{

                this.$store.dispatch('SigninNewUser', this.$data)

                console.log(this.$data);
            }

        },

        // verifies to check if user exists in the database
        verifyLogIn(){
            if(this.username == 0 || this.password == 0){

                document.getElementById("eertxt").innerHTML += `<p style="color: red; font-size: 10px;">Input please</p>`

            } else{

                this.$store.dispatch('onLogged', this.$data) 

            }
   
        }
    },
    mounted(){
    }
}
</script>
<style>
    #sign{
        /* background: linear-gradient(to top, rgb(0, 0, 0), rgb(34, 33, 33)); */
        color:rgb(0, 0, 0);
        font-family: kadwa;
        border-radius: 50px;
        padding: 5px 0px 5px 0px;
    }

/*    #signupForm{
        border: 1px solid black;
        padding: 20px 0px 20px 0px;
        border-radius: 40px;
    }

    #innerBorder{
        border: 1px solid black;
        padding: 10px 10px 10px 10px;
        border-radius: 20px;
    }
*/



</style>