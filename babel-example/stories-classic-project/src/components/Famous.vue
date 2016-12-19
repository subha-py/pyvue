<template>
  <div id="famous">
    <h2>Trending stories<strong>({{famous.length}})</strong></h2>
    <ul class="list-group">
      <li class="list-group-item" v-for="story in famous">
        {{ story.writer }} said "{{ story.plot }}" and got {{ story.upvotes }} upvotes.
      </li>
    </ul>
  </div>
</template>


<script>
  import {store} from '../store.js'
  export default {
    data () {
      return {
        stories: store.stories
      }
    },
    computed: {
      famous: function () {
        return this.stories.filter(function (story) {
          return story.upvotes > 50
        })
      }
    }
  }

</script>
