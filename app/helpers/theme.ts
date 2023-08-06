import {changeTheme as themeChanger} from '@tinijs/core';
import {mainStore} from '../stores/main';

const LS_KEY = 'TiniApp:theme';

export function initTheme() {
  const theme = localStorage.getItem(LS_KEY);
  if (!theme) return;
  const [soul, skin] = theme.split('/');
  return themeChanger({soul, skin});
}

export function changeTheme(theme: string) {
  const [soul, skin] = theme.split('/');
  localStorage.setItem(LS_KEY, theme);
  mainStore.commit('soulName', soul);
  mainStore.commit('skinName', skin);
  return themeChanger({soul, skin});
}
