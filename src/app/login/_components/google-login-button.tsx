'use client';

import { FC } from 'react';
import { BsGoogle } from 'react-icons/bs';

import { LOGIN_URL } from '@/constants';

export const GoogleLoginButton: FC = () => {
  const handleClick = () => {
    window.location.href = LOGIN_URL;
  };

  return (
    <button
      className='inline-flex items-center rounded-lg bg-blue-10 px-5 py-2.5 text-center text-sm font-bold text-mauve-1 hover:bg-blue-10/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-10/50 dark:focus-visible:ring-blue-10/50'
      onClick={handleClick}
    >
      <BsGoogle className='-ml-1 mr-2 h-4 w-4' />
      Google ログイン
    </button>
  );
};
