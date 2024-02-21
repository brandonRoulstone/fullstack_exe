<template>
<div>
  <nav class="fixed-navv">
    <router-link to="/" data-att>Admin</router-link>
    <router-link to="/about" data-att>About</router-link>
    <router-link to="/login" data-att>Create User</router-link>
    <router-link to="/signup" data-att>log in</router-link>
    <!-- checks if there is a cookie logout will show -->
    <!-- <button v-if="$cookies.get('jwt')" @click="logOut()">logout</button> -->
    <!-- when there isnt a cookie logout will show -->
    <button v-if="$cookies.get('jwt')" @click="logOut()" data-att>logout</button>
  </nav>
  <router-view/>
</div>
</template>

<script>
export default {
  data(){
    return {
      loggedOut: false
    }
  },
  methods: {
    logOut(){
      this.$store.dispatch('logout')
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.fixed-navv{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

[data-att]{
  background: black;
  color: white;
  text-decoration: none;
  padding: 5px;
  margin: 5px;
  border-radius: 10px;
}
</style>
