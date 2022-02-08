<template>
  <v-container class="container--fluid fill-height  sea-bg">
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card class="elevation-10 pa-3 z-index-99 color-white bg-white">
          <div class="logo-mount"></div>
          <v-card-text>
            <div id="system-title" class="layout column align-center mb-6 ">
              <!-- <v-img :src="logoSrc" height="30" width="150" /> -->
              <!--                                                        Citrus-->
            </div>
            <v-form @keydown.enter.native="login">
              <v-text-field
                outlined
                clearable
                v-model="model.loginId"
                prepend-icon="mdi-account"
                placeholder="请输入登录名"
                name="loginId"
                label="登录名"
                required
              />
              <v-text-field
                outlined
                clearable
                v-model="model.password"
                prepend-icon="mdi-lock"
                placeholder="请输入密码"
                name="password"
                label="密码"
                type="password"
                required
              />
              <v-text-field
                outlined
                clearable
                v-model="model.captcha"
                placeholder="请输入验证码"
                name="captcha"
                label="验证码"
                required
              >
                <div
                  slot="append"
                  class="mt-0 captcha"
                  @click.prevent="refreshCaptcha"
                >
  
                </div>

                <v-icon slot="prepend">mdi-security</v-icon>
              </v-text-field>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer />
             <v-btn color="primary" outlined to="/singup">注册</v-btn>
            <v-btn class="submit-btn" color="#acb6e5" dark @click="login"
              >登录</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
 
    <!--消息提示-->
  </v-container>
</template>

<script>
  // import VueThreejsBirds from "vue-threejs-birds";
  // import { API_BASE_PATH } from "../../config";

  // const CAPTCHA_BASE_URL = API_BASE_PATH + "/rest/verify/captcha";

  export default {
    components: {
      // VueThreejsBirds, 
    },
    data: () => ({
      logoSrc: require("../assets/text.png"),
      // captchaSrc: CAPTCHA_BASE_URL,
      model: {
        loginId: "lisa@simpson.com",
        mode: "password",
        password: "secret42",
        captcha: "",
      },
      birds: {
        color1: "#000000",
        color2: "#271e1e",
        quantity: 4,
        canvasBgAlpha: 0,
        wingsSpan: 20,
        colorEffect: 2,
      },
    }),
    methods: {
      handleResize() {
        this.$root.$emit("resized");
      },
      login() {
        this.$store
          .dispatch("user/login", this.model)
          .then(() => {
            this.$router.push("/");
          })
          .catch((err) => {
            this.refreshCaptcha();
            console.log(err);
            // this.$toast.error(err.message, {
            //   position: "top-center",
            // });
          });
      },
      refreshCaptcha() {
        // this.captchaSrc = CAPTCHA_BASE_URL + "?timestamp=" + Date.now();
      },
    },
    mounted() {
      window.addEventListener("resize", this.handleResize);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.handleResize);
    },
  };
</script>

<style scoped  >

</style>
