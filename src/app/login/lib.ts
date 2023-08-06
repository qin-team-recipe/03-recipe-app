import { StaticImageData } from 'next/image';

import favoriteLoginPng from '@public/favoriteLogin.png';
import shoppingLoginPng from '@public/shoppingLogin.png';

export const getImage = (afterLoginUrl: string): StaticImageData => {
  if (/shopping/.test(afterLoginUrl)) {
    return shoppingLoginPng;
  } else if (/favorite/.test(afterLoginUrl)) {
    return favoriteLoginPng;
  }

  return favoriteLoginPng;
};

export const getTitle = (afterLoginUrl: string) => {
  if (/shopping/.test(afterLoginUrl)) {
    return '買い物リスト';
  } else if (/favorite/.test(afterLoginUrl)) {
    return 'お気に入り';
  }

  return '';
};
