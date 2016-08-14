<template name="subreddit">
  <div class="subreddit has-text-centered">
    <h2 class="title is-3">{{ name | uppercase }}</h2>
    <hr>
    <ul class="item-list">
        <li v-for="obj in posts">
            <post :item="obj"></post>
        </li>
    </ul>
  </div>
</template>

<script>
import Post from './Post.vue'

export default {
  props: ['name'],
  components: {
    Post
  },
  data: function () {
     return { posts: [] }
  },
  created: function(){
     this.$http.get("https://www.reddit.com/r/"+ this.name +"/top.json?limit=5")
     .then(function(resp){
         this.posts=resp.data.data.children;
     });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
