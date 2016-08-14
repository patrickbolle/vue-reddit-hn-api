<template lang="html">
  <div class="has-text-centered">
    <h2 class="title is-3">HACKER NEWS</h2>
    <hr>
    <ul class="item-list" v-sortable>
        <li v-for="post in posts">
            <hack-post :item="post"></hack-post>
        </li>
    </ul>
  </div>
</template>

<script>
import HackPost from './HackPost.vue'

export default {
  components: {
    HackPost
  },
  data: function () {
     return { posts: [] }
  },
  created: function(){
     this.$http.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
     .then(function(resp){
         this.posts = resp.data.slice(0,5)
     })
  }
};
</script>

<style lang="css">
</style>
