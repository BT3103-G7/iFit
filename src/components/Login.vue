<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          class="mb-2 mr-sm-2 mb-sm-0"
          required
        ></b-form-input>
      </b-form-group>
      <label for="text-password">Password</label>
      <b-form-input
        type="password"
        id="text-password"
        v-on:keyup.enter="onSubmit"
        class="mb-2 mr-sm-2 mb-sm-0"
        required
      ></b-form-input>
      <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember my preference</b-form-checkbox>
      <b-button type="submit" variant="primary">LOG IN</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>
<style scoped>
</style>