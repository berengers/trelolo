<template>
  <div id="login">
    <form>
      <h2>Log in Trelolo</h2>
      <div class="container">
        <label>E-mail</label>
        <input type="mail" v-model="email" />
      </div>
      <div class="container">
        <label>Password</label>
        <input type="password" v-model="password" />
      </div>
      <div @click="login" id="submit">Log in</div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login() {
      const { email, password } = this
      this.$store.dispatch('login', { email, password })
    }
  }
}
</script>

<style scoped>
#login {
  max-width: 430px;
  margin: auto;
  padding: 10px;
  color: #4d4d4d;
}
.container {
  font-family: "jaf-facitweb","Helvetica Neue",Arial,sans-serif;
  margin-bottom: 17px;
}
h2 {
  font-size: 2rem;
}
label {
  font-weight: 300;
  display: block;
  margin: 0 0 .4em;
}
input {
  background: #edeff0;
  border-radius: 4px;
  border: 1px solid #cdd2d4;
  box-sizing: border-box;
  padding: .5em;
  max-width: 430px;
  width: 100%;
}
#submit {
  margin-top: 30px;
  background: #61bd4f;
  padding: 0.8em;
  border-radius: 3px;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  text-align: center;
}
</style>
