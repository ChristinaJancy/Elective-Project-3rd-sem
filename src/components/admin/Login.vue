<template>
  <div class="loginPage">
    <PasswordReset
      v-if="showPasswordReset"
      @close="togglePasswordReset()"
    ></PasswordReset>

    <v-row class="pa-0 ma-0">
      <v-spacer class="d-none d-lg-block"></v-spacer>
      <v-col
        class="pa-0 ma-0 d-none d-lg-block"
        lg="4"
        xs="0"
        align-self="center"
        justify="center"
      >
        <section>
          <h1>NoLabel</h1>
          <p>
            Welcome to the
            <router-link to="/">NoLabels'</router-link> clothing shop with no
            labels.
          </p>
        </section>
      </v-col>
      <v-col
        class="pa-0 ma-0"
        lg="4"
        xs="12"
        align-self="center"
        justify="center"
      >
        <section id="signInPanel">
          <div :class="{ 'signup-form': !showLoginForm }" class="col2">
            <form v-if="showLoginForm" @submit.prevent>
              <h1>Welcome back :)</h1>
              <div>
                <label for="email1">Email</label>
                <input
                  v-model.trim="loginForm.email"
                  type="text"
                  placeholder="you@email.com"
                  id="email1"
                />
              </div>
              <div>
                <label for="password1">Password</label>
                <input
                  v-model.trim="loginForm.password"
                  type="password"
                  placeholder="******"
                  id="password1"
                />
              </div>
              <v-btn @click="login()" class="button"> Log In </v-btn>
              <div class="extrasPanels">
                <a style="color: white" @click="togglePasswordReset()"
                  >Forgot Password</a
                >
                <br />

                <a style="color: white" @click="toggleForm()"
                  >Create an Account</a
                >
              </div>
            </form>

            <form v-else @submit.prevent>
              <h1>Get Started</h1>
              <div>
                <label for="name">Name</label>
                <input
                  v-model.trim="signupForm.name"
                  type="text"
                  placeholder="Savvy Apps"
                  id="name"
                />
              </div>
              <div>
                <label for="title">Title</label>
                <input
                  v-model.trim="signupForm.title"
                  type="text"
                  placeholder="Company"
                  id="title"
                />
              </div>
              <div>
                <label for="email2">Email</label>
                <input
                  v-model.trim="signupForm.email"
                  type="text"
                  placeholder="you@email.com"
                  id="email2"
                />
              </div>
              <div>
                <label for="password2">Password</label>
                <input
                  v-model.trim="signupForm.password"
                  type="password"
                  placeholder="min 6 characters"
                  id="password2"
                />
              </div>
              <button @click="signup()" class="button">Sign Up</button>
              <div class="extras">
                <a @click="toggleForm()">Back to Log In</a>
              </div>
            </form>
          </div>
        </section>
      </v-col>
      <v-spacer class="d-none d-lg-block"></v-spacer>
    </v-row>
  </div>
</template>
<script>
import PasswordReset from "./PasswordReset";
import { auth } from "../../firebase";
// import { auth } from "../../../firebase";

export default {
  components: {
    PasswordReset,
  },
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      signupForm: {
        name: "",
        title: "",
        email: "",
        password: "",
      },
      showLoginForm: true,
      showPasswordReset: false,
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.password,
      });
    },
    signup() {
      this.$store.dispatch("signup", {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        title: this.signupForm.title,
      });
    },
    async resetPassword() {
      this.errorMsg = "";

      try {
        await auth.sendPasswordResetEmail(this.email);
        this.showSuccess = true;
      } catch (err) {
        this.errorMsg = err.message;
      }
    },
    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset;
    },
  },
};
</script>

<style lang="scss" scoped>
.loginPage {
  height: 100vh;
}
.extrasPanels {
  padding-top: 4vh;
}
section {
  max-width: 1200px;
}

#signInPanel {
  padding-top: 10vh;
  display: table;
  margin: auto;
}
</style>


