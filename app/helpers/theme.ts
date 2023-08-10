import {changeTheme as themeChanger} from '@tinijs/core';

import {Configurable} from '../configurable';
import {mainStore} from '../stores/main';

function getKey() {
  return `TiniApp:${Configurable.getOptions('appId')}:theme`;
}

export function initTheme() {
  const theme = localStorage.getItem(getKey());
  if (!theme) return;
  const [soul, skin] = theme.split('/');
  return themeChanger({soul, skin});
}

export function changeTheme(theme: string) {
  const [soul, skin] = theme.split('/');
  localStorage.setItem(getKey(), theme);
  mainStore.commit('soulName', soul);
  mainStore.commit('skinName', skin);
  return themeChanger({soul, skin});
}
