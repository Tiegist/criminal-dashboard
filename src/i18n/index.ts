import { createI18n } from 'vue-i18n'
import am from './locales/am'
import en from './locales/en'

export type SupportedLocale = 'am' | 'en'

const STORAGE_KEY = 'app-locale'

export function getStoredLocale(): SupportedLocale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'am') return stored
  return 'am'
}

export function setStoredLocale(locale: SupportedLocale) {
  localStorage.setItem(STORAGE_KEY, locale)
  document.documentElement.lang = locale === 'am' ? 'am' : 'en'
}

const i18n = createI18n({
  legacy: false,
  locale: getStoredLocale(),
  fallbackLocale: 'am',
  messages: { am, en },
})

setStoredLocale(getStoredLocale())

export default i18n

export function resolvePageTitle(routeName: string | symbol | null | undefined): string {
  if (!routeName || typeof routeName !== 'string') return ''
  const key = `pages.${routeName}`
  const { t, te } = i18n.global
  return te(key) ? t(key) : ''
}
