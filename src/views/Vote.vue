<template>
  <div class="vote">
    <Youtube/>
    <Search/>
    <Votation/>
  </div>
</template>

<script>
import Youtube from '../components/Vote/Youtube.vue';
import Search from '../components/Vote/Search.vue';
import Votation from '../components/Vote/Votation.vue';

export default {
  name: 'Vote',
  components: {
    Youtube,
    Search,
    Votation,
  },
};
</script>

<style lang="scss" scoped>
  .vote {
    padding: 15px 0;
    display: grid;
    grid-template:
    [row1-start] "youtube search" [row1-end]
    [row2-start] "votation votation" [row2-end];
    column-gap: 35px;
    row-gap: 35px;
    justify-items: stretch;
  }
</style>
