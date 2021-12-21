// eslint-disable-next-line import/no-extraneous-dependencies
import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import es from 'vuetify/lib/locale/es';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.deepPurple.accent1, // #E53935
        secondary: colors.teal.lighten3, // #E53935
        accent: colors.indigo.base, // #3F51B5
      },
    },
  },
  lang: {
    locales: { es },
    current: 'es',
  },
  icons: {
    iconfont: 'mdi',
  },
});
