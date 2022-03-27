import { createI18n } from 'vue-i18n'
import en from './plugins/en.json'
import fr from './plugins/fr.json'

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    fr
  }
})

export default i18n;