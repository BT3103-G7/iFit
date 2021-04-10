<template>
  <div id="content-wrap">
    <div id="background"></div>
    <div id="form-placeholder">
      <h1>How can we help?</h1>
      <form class="form" @submit.prevent="sendEmail">
        <label for="name" class="required">Full Name:</label><br>
        <input id="name" required v-model="name" name='name' type="text"/><br><br>
        <label for="email" class="required">Email:</label><br>
        <input id="email" required v-model='email' name='email' type="email"/><br><br>
        <label for="message" class="required">Your message:</label><br>
        <textarea id="message" required v-model='message' name='message' rows="6"></textarea><br><br>
        <p style='color:gold'>Note: Responses may take up to 3 working days.</p>
        <p style='color:gold'>Alternatively, you can reach us at +65 6392 2994</p>
        <input type="submit" variant="warning" value="Submit" onclick="return confirm('Submit form?')">
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('serviceID', 'templateID', e.target,
            'userID', {
              name: this.name,
              email: this.email,
              message: this.message
            });
      } catch (error) {
        console.log({error});
      }
      // Reset form field
      this.name = '';
      this.email = '';
      this.message = '';
    },
  }
};
</script>

<style scoped>
#app * {
  box-sizing: border-box;
}
/* #app {
  margin: 20px auto;
  max-width: 500px;
}  */
label {
  width: 35%;
  text-align: left;
  color: white;
} 
input[type="text"], input[type="email"],
textarea, input[type="submit"] {
  width: 30%;
  left: 0;
  border-radius: 10px;
  border: 1px solid #2d3f55;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}
input[type="submit"] {
  cursor: pointer;
}
input[type="submit"]:hover {
  background:gold;
  border: solid 1px #2d3f55;
  color: white;
}
.required:after {
  content: " *";
  color: red;
}
#background {
    position: absolute;
    background: url(../assets/contact_background.jpg);
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    opacity: 1;
    z-index: -1;
    background-size: cover;
    min-height: 100%;
    background-repeat: no-repeat;
} 
#content-wrap {
    overflow-x: hidden
}
#form-placeholder {
    top: 10%;
    width: 100%;
    left: 10%;
    position: relative;
    z-index: 1;
    text-align: left;
}
h1 {
  text-align: left;
  color: gold;
  padding-left: 0em;
  padding-top: 2em;
  padding-bottom: 1em;
}
</style>