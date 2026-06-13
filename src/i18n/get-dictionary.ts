import type { Locale } from './settings'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dictionaries: Record<Locale, () => Promise<any>> = {
    vi: () => import('./dictionaries/vi.json').then(module => module.default),
    en: () => import('./dictionaries/en.json').then(module => module.default),
    ja: () => import('./dictionaries/ja.json').then(module => module.default),
    zh: () => import('./dictionaries/zh.json').then(module => module.default),
    ko: () => import('./dictionaries/ko.json').then(module => module.default),
}

export const getDictionary = async (locale: Locale) =>
    dictionaries[locale]?.() ?? dictionaries.vi()