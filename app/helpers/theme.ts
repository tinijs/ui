import {changeTheme as _changeTheme} from '@tinijs/core';

import {Configurable} from '../configurable';
import {mainStore} from '../stores/main';

function getKey() {
  return `TiniApp:${Configurable.getOption('appId')}:theme`;
}

function commitTheme(soul: string, skin: string) {
  mainStore.commit('activeSoulId', soul);
  mainStore.commit('activeSkinId', skin);
  return _changeTheme({soul, skin});
}

export function initTheme() {
  const theme = localStorage.getItem(getKey());
  if (!theme) return;
  const [soul, skin] = theme.split('/');
  return commitTheme(soul, skin);
}

export function changeTheme(theme: string) {
  const [soul, skin] = theme.split('/');
  localStorage.setItem(getKey(), theme);
  return commitTheme(soul, skin);
}
