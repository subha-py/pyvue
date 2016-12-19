<template>
  <div id="login">
    <h2>Sign in</h2>
    <div class="container">
      <div class="row">

        <div class="col-md-6 col-md-offset-3">
          <input class="form-control" type="email" placeholder="Email address">
          <input class="form-control" type="password" placeholder="Password">
          <button class="btn">Sign in</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    created () {
      console.log('login')
    }
  }
</script>
