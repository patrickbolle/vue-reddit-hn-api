<template lang="html">
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img v-ifsrc="{{item.data.thumbnail}}" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <a href="{{item.data.url}}">
                  {{ item.data.title | truncate}}
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
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
