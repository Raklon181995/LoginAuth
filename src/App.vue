<template>
  <v-app>
    <v-main>
      <Header v-if="isUserLoggedIn()" />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/layout/Header.vue'
export default {
  name: 'App',
  components:{
    Header
  },
  data: () => ({
    //
  }),
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
<style>
.header-icon{
  max-width: 18px !important;
 
}
.header-icon-acc{
  max-width: 15px !important;
}
.text-black{
  color: #1C1C1C !important;
}
.font-16{
  font-size: 18px !important;
  font-family: Playfair Display;
  font-weight: 600;
}

</style>

