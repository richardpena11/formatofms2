<template>
  <v-card class="search">
    <v-text-field
      class="search__input"
      label="Buscar video"
      append-outer-icon="mdi-magnify"
      clearable
      @click:append-outer="seachVideo"
      v-on:keyup.enter="seachVideo"
      v-model="query"
    ></v-text-field>
    <v-virtual-scroll
      class="search__results"
      :items="searchResults.items"
      :item-height="283"
      height="500"
    >
      <template v-slot:default="{ item }">
        <v-card :to="`/${item.id.videoId}`" ripple raised hover class="search__results__card">
          <v-img
            class="search__results__card__img"
            :aspect-ratio="16 / 9"
            :lazy-src="item.snippet.thumbnails.default.url"
            :src="item.snippet.thumbnails.high.url"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row> </template
          ></v-img>
          <v-card-subtitle class="search__results__card__title">{{
            item.snippet.title
          }}</v-card-subtitle>
          <v-card-text class="search__results__card__detail">
            <span>{{ item.snippet.channelTitle }}</span>
            <span>{{ item.snippet.publishedAt.split("T")[0] }}</span>
          </v-card-text>
        </v-card>
      </template>
    </v-virtual-scroll>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      query: '',
    };
  },
  computed: {
    searchResults() {
      return this.$store.state.searchResults;
    },
  },
  methods: {
    seachVideo() {
      this.$store.dispatch('getYoutubeVideosByQuery', this.query);
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  grid-area: search;
  max-height: 594px;
  width: 350px;
  padding: 10px 20px;
  &__results {
    height: calc(100% - 74px);
    overflow: auto;
    /* width */
    &::-webkit-scrollbar {
      width: 7px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.2);
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: rgba(179, 136, 255, 0.5);
    }
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: rgba(179, 136, 255, 0.7);
    }
    &__card {
      padding: 10px;
      &__img {
        margin: 0 auto;
      }
      &__title {
        padding-left: 0;
        padding-right: 0;
      }
      &__detail {
        padding: 0;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
