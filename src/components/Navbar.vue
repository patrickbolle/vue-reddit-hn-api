<template lang="html" name="Navbar">
  <nav class="nav">
  <div class="nav-left">
    <a class="nav-item is-brand" href="#">
      <h2 class="title is-2">Palm 1.0</h2>
    </a>
  </div>

  <div class="nav-center">
    <a class="nav-item" href="#">
      <span class="icon">
        <i class="fa fa-github"></i>
      </span>
    </a>
    <a class="nav-item" href="#">
      <span class="icon">
        <i class="fa fa-twitter"></i>
      </span>
    </a>
  </div>

  <span class="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>

  <div class="nav-right nav-menu">
    <a class="nav-item" href="#">
      Home
    </a>
    <a class="nav-item" href="#">
      Documentation
    </a>
    <a class="nav-item" href="#">
      Blog
    </a>
  </div>
</nav>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
