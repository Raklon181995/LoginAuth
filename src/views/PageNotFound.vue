<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
        <v-col align="center">
          <h1>404</h1>
          <p>The page, you're looking for is not found</p>
          <router-link class="text-decoration-none" v-if="isUserLoggedIn()" to='/'>
            <v-btn>GO to home page</v-btn>
          </router-link>
          <router-link class="text-decoration-none" v-else to='/login'>
            <v-btn>GO to login page</v-btn>
          </router-link>
        </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  methods:{
    isUserLoggedIn(){
      if(localStorage.getItem('token')){
        return true;
      }
      return false;
    }
  }
};
</script>