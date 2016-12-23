<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Welcome to dynamic Components!</h1>
    <ul class="nav nav-tabs">
      <!--set 'active' class conditionally-->
      <li v-for="page in pages" :class="isActivePage(page) ? 'active' : '' ">
        <!--use links to change between tabs-->
        <a @click="setPage(page)">{{page | capatalize}}</a>
      </li>
    </ul>
    <component :is="activePage"></component>
    <!--<hello></hello>-->
    <!--<login></login>-->
    <!--<register></register>-->
    <!--<stories :stories="stories"></stories>-->
  </div>
</template>

<script>
import Vue from 'vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Stories from './components/Stories.vue'

Vue.filter('capitalize', function (value) {
  return value.charAt(0).toUpperCase() + value.substr(1)
})

export default {
  components: {
    // Hello,
    Login,
    Register,
    Stories
  },
  data () {
    return {
      pages: [
        'stories',
        'register',
        'login'
      ],
      activePage: 'stories'
    }
  },
  methods: {
    setPage (newPage) {
      this.activePage = newPage
    },
    isActivePage (page) {
      return this.activePage === page
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
