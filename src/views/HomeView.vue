<template>
<div>
  <div class="text-center mt-10">
    <h1>Welcome To Home page</h1>
  </div> 
  </div>
</template>

<script>

  export default {
    name: 'HomeView',

    components: {},
     data: () => {
    return {
    }
    }
  }
</script>
<style>
.vue-btn{
  background-color: #770015 !important;
  color: #ffffff !important;
}
.banner-5{
  width: 100%;
  height: 100% !important;
}
.banner-img{
  width: 100%;
  height: 100% !important;
}
.model-img{
 position: relative;
  width: 120px;
  height: 120px;
  border-radius: 100px;
}
.model1{
  background: #F1DBE9;
}
.model2{
  background: #DDD3EB;
}
.model3{
  background:#D3EAEB;
}
.model4{
  background: #EFF1D9;
}
.model5{
  background: #F1DADB;
}
.model6{
  background: #D9F1DE;
}
@media only screen and (min-width: 960px) {
  .banner-5{
  width: 100%;
  height: 312px !important;
}
  .banner-img{
  width: 100%;
  height: 632px !important;
}
.model-img{
 position: relative;
  width: 170px;
  height: 170px;
  border-radius: 100px;
}
}


</style>

