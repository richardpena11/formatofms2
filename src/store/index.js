import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentVideo: 'lG0Ys-2d4MA',
    searchResults: {},
  },
  mutations: {
    updateCurrentVideo(state, newCurrentVideo) {
      state.currentVideo = newCurrentVideo;
    },

    updateSearchResults(state, newSearchResults) {
      state.searchResults = newSearchResults;
    },
  },
  actions: {
    getYoutubeVideosByQuery({ commit }, query) {
      console.log(query);
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=AIzaSyBCMkXJgQxSTmBB5UhrFzYy0xfxIvaQV5I`,
      )
        .then((response) => response.json())
        .then((data) => commit('updateSearchResults', data));
    },
  },
  modules: {},
});
