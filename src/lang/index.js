import Vue from 'vue'
import VueI18n from 'vue-i18n'
process.env.NODE_ENV === "development" ? Vue.use(VueI18n) : null;

import enLocale from './en'
import zhLocale from './zh'

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'en',
  messages: {
    zh: {
      ...zhLocale
    },
    en: {
      ...enLocale
    }
  }
});

export  default i18n;