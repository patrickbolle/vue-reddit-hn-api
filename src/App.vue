<template>
  <navbar></navbar>
  <div id="app" class="container">
    <div class="columns">
      <div class="column">
        <subreddit name="webdev"></subreddit>
      </div>
      <div class="column">
        <subreddit name="cscareerquestions"></subreddit>
      </div>
      <div class="column">
        <subreddit name="javascript"></subreddit>
      </div>
    </div>
  </div>
</template>

<script>
import Subreddit from './components/Subreddit.vue'
import Post from './components/Post.vue'
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Subreddit,
    Post,
    Navbar
  }
}
</script>

<style>
@import "../node_modules/bulma/css/bulma.css";

</style>
