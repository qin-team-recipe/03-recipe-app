import { cookies } from 'next/headers';
import Image from 'next/image';
import { FC } from 'react';

import { AppleLoginButton } from '@/app/login/_components/apple-login-button';
import { GoogleLoginButton } from '@/app/login/_components/google-login-button';
import { getImage } from '@/app/login/lib';
import { AFTER_LOGIN_URL_COOKIE_KEY, FRONT_BASE_URL } from '@/constants';

export const LoginContent: FC = () => {
  const cookieStore = cookies();
  const afterLoginUrl =
    cookieStore.get(AFTER_LOGIN_URL_COOKIE_KEY)?.value ?? FRONT_BASE_URL;

  return (
    <>
      <div className='mx-auto w-1/2'>
        <Image src={getImage(afterLoginUrl)} alt='Required Sign In' />
      </div>
      <h2 className='mt-2 font-bold'>ログインをお願いします</h2>
      <p className='mt-2 text-sm'>
        こちらの機能を利用するにはログインが必要です
      </p>
      <div className='mt-6 flex flex-col items-center justify-center gap-2.5 sm:flex-row'>
        <GoogleLoginButton />
        <AppleLoginButton />
      </div>
    </>
  );
};
