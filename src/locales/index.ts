import { common as arCommon } from './ar/common';
import { common as enCommon } from './en/common';

export const translations = {
  ar: {
    common: arCommon,
  },
  en: {
    common: enCommon,
  },
};

export type Locale = 'ar' | 'en';
export type TranslationKeys = typeof arCommon;
