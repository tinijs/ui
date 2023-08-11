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
  let themeId = localStorage.getItem(getKey());
  if (!themeId) {
    const defaultSoul = Configurable.getOption('soulList')[0];
    const defaultSkin = defaultSoul.skins[0];
    themeId = `${defaultSoul.id}/${defaultSkin.id}`;
  }
  const [soul, skin] = themeId.split('/');
  return commitTheme(soul, skin);
}

export function changeTheme(themeId: string) {
  const [soul, skin] = themeId.split('/');
  localStorage.setItem(getKey(), themeId);
  return commitTheme(soul, skin);
}
