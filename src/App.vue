<template>
  <v-app dark>
    <v-main class="app" >
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
  .app {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
</style>
