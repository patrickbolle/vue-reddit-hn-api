<template>
  <div id="app" class="container">
    <navbar></navbar>
    <div class="columns main" v-sortable>
      <div class="column">
        <subreddit name="webdev"></subreddit>
      </div>
      <div class="column">
        <subreddit name="cscareerquestions"></subreddit>
      </div>
      <div class="column">
        <subreddit name="javascript"></subreddit>
      </div>
      <div class="column">
        <hacker-news></hacker-news>
      </div>
    </div>
  </div>
</template>

<script>
import Subreddit from './components/Subreddit.vue'
import Post from './components/Post.vue'
import Navbar from './components/Navbar.vue'
import HackerNews from './components/HackerNews.vue'
import Sortable from 'vue-sortable'

export default {
  components: {
    Subreddit,
    Post,
    Navbar,
    HackerNews
  }
}
</script>

<style>
@import "../node_modules/bulma/css/bulma.css";

p, h1, h2, h3, h4, h5, li, ul, a {
  font-family: 'Open Sans', sans-serif !important;
}

body {
  background-color: white;
}

.main {
  padding-top: 5px;
}

.box {
  border-radius: 0px !important;
}

.box a {
    color: black;
    font-weight: 600
}

.box a:visited {
    color: rgb(189, 189, 189);
}

.content a:not(.button) {
  border-bottom: none;
}

.box .content a:not(.button):visited {
  color: rgb(189, 189, 189);
  font-weight: light;
}

.box {
  height: 100px;
}

nav {
  padding-top: 25px;
  margin-bottom: -15px;
}

</style>
