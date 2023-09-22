import { FC } from 'react';
import { BsApple } from 'react-icons/bs';

export const AppleLoginButton: FC = () => {
  return (
    <button className='inline-flex items-center rounded-lg bg-mauve-12 px-5 py-2.5 text-center text-sm font-bold text-mauve-1 hover:bg-mauve-12/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mauve-12/50 dark:hover:bg-mauve-12/30 dark:focus-visible:ring-mauve-12/50'>
      <BsApple className='-ml-1 mr-2 h-5 w-5' />
      Apple ログイン
    </button>
  );
};
