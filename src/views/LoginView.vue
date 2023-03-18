<template>
  <div>
    <v-container fluid  fill-height class="background-theme">
      <v-row no-gutters class="justify-center align-center mt-12" justify="center">
        <v-col cols="12" justify="center" class="d-flex justify-center">
          <v-card class="px-4 text-center py-6 login-card" >
            <div class="justify-center" align="center">
              <v-img alt="Logo" src="@/assets/logo.png" width="100px"/>
            </div>
             
              <p class="font-30 butler-medium mt-3 pb-8">Login</p>
              <v-form class="px-md-14 px-lg-14">
                  <div>
                      <v-text-field class="pt-0" type="email" placeholder="Enter Username" v-model="form.username">
                      </v-text-field>
                  </div>
                  <v-text-field class="pt-0 mt-5" type="password" placeholder="Password" v-model="form.password">
                  </v-text-field>
              </v-form>
              <v-alert
                v-if="error"
                border="left"
                text
                type="error"
              >{{error}}</v-alert>
              <v-btn @click="login()" class="mt-5 all-button poppins-medium">
                  Log In
              </v-btn>
              <h4 class="font-weight-thin text-end pt-6 mt-5 small">
                Test credentials : test/test@123
              </h4>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
    data: () => {
      return {
        error: null,
        accept:{
          username : 'test',
          password : 'test@123'
        },
        form: {
          username: "",
          password: "",
        },
      };
    },
    methods: {
        async login() {
          this.error = null
          if(this.form.username == this.accept.username 
              && this.form.password == this.accept.password){
            localStorage.setItem('token', 'PvNLxs81uIgm5UCohqmjafNinaJa');
            this.$router.push('/') 
          }else{
            this.error = "Invalid Credentials"
          }
        },
    },

}
</script>

<style lang="scss">
.login-card{
  width: 100%;
  max-width: 500px;
  border: solid 1px #1f1f1f !important;
}
.font-30 {
    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;
}

.all-button {
    width: 175px;
    height: 36px !important;
    border-radius: 4px;
    background: #1f1f1f !important;
    color: white !important;
    font-size: 16px !important;
}

.login-router {
    position: absolute;
    bottom: 25%;
    left: 0;
    right: 0;
}

.login-social-Icon {
    border: 2px solid;
    background-color: #ffffff;
    height: 45px;
    border-radius: 50% !important;
    width: 45px;
}

.form-position-social {
    position: relative;
}

.form-position {
    position: relative;
}

.font-class-name.v-input .v-label {
    font-size: 13px;
}

.background-theme {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (min-width: 960px) {
    .login-social-Icon {
        border: 2px solid;
        background-color: #ffffff;
        height: 45px;
        border-radius: 50% !important;
        width: 45px;
    }
    .login-router {
        position: absolute;
        bottom: 2%;
        left: 0;
        right: 0;
    }
}
</style>


