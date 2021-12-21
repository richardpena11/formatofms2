<template>
  <div class="youtube">
    <youtube :fitParent="true" :video-id="videoId"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
    videoId() {
      this.$store.commit('updateCurrentVideo', this.$route.params.videoID);
      return this.$store.state.currentVideo;
    },
  },
};
</script>

<style lang="scss" scoped>
  .youtube {
    grid-area: youtube;
    width: 1056px;
    height: 594px;
  }
</style>
