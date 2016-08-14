<template lang="html">
  <div class="post">
    <a :href="item.data.url" :style="item.data.thumbnail | setAsBackground"
       target="_blank" class="thumbnail"></a>
    <div class="details">
        <a :href="item.data.url" :title="item.data.title" target="_blank" class="title">
            {{ item.data.title | truncate}}
        </a>
        <div class="action-buttons">
            <a href="http://reddit.com{{ item.data.permalink }}" title="Vote">
                <i class="material-icons">thumbs_up_down</i>
                {{item.data.score}}
            </a>
            <a href="http://reddit.com{{ item.data.permalink }}" title="Go to discussion">
                <i class="material-icons">forum</i>
                {{item.data.num_comments}}
            </a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
