<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="story in stories">
      {{ story.writer }} said "{{ story.plot }}" and got {{ story.upvotes }} upvotes.
    </li>
  </ul>
</template>


<script>
  import {store} from '../store.js'
  export default {
    data () {
      return {
        stories: store.stories
      }
    }
  }
</script>
