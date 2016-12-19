<template>
  <div id="register">
    <h2>Register Form</h2>
    <div class="container">
      <div class="row">

        <div class="col-md-6 col-md-offset-3">
          <input class="form-control" placeholder="First Name">
          <input class="form-control" placeholder="Last Name">
          <input class="form-control" type="email" placeholder="Email address">
          <input class="form-control" type="password" placeholder="Password">
          <input class="form-control" type="password" placeholder="Confirm Password">
          <button class="btn">Sign up</button>
        </div>
      </div>
      <div class="row"><famous></famous></div>
    </div>
  </div>
</template>

<script>
  import Famous from './Famous.vue'
  export default {
    components: {
      Famous
    },
    created () {
      console.log('register')
    }
  }
</script>
