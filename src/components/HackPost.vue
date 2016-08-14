<template lang="html" name="HackPost">
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <a href="{{ data.url }}">
              {{ data.title }}
            </a>
            <br>
          </p>
        </div>
      </div>
    </article>
  </div>
<br>
</template>

<script>
export default {
  props: ['item'],
  data: function () {
     return { data: [] }
  },
  created: function(){
     this.$http.get("https://hacker-news.firebaseio.com/v0/item/" + this.item + ".json?print=pretty")
     .then(function(resp){
         this.data=resp.data
     })
  }
};
</script>

<style lang="css">
</style>
