<template>
    <v-app-bar
      app
      color="#FFFFFF"
      dark
    >
      <div class="d-flex align-center ml-md-16">
        <v-img
          alt="Vuetify Logo"
          src="@/assets/images/Vector.svg"
          width="18"/>
      </div>
      <v-spacer></v-spacer>
      <router-link
        to="/"
        class="maroon-txt text-decoration-none text-black font-16">
          Company Name
      </router-link>
     
      <v-spacer></v-spacer>
      <div class="d-flex mr-md-16">
        <div class="mx-4">
          <v-btn @click="logout()">Logout</v-btn>
        </div>
          </div>
    </v-app-bar>
</template>
<script>
export default{
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push('/login');
    }
  }
}
</script>
