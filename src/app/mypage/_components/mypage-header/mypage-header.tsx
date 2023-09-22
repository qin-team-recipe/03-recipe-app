'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { tv } from 'tailwind-variants';

import { EditMenu } from '@/app/mypage/_components/edit-menu';

const layout = tv({
  base: 'flex items-center justify-between gap-3',
});

export const MypageHeader: FC = () => {
  const router = useRouter();

  return (
    <div className={layout()}>
      <button
        className='flex h-8 w-8 items-center justify-center rounded-full p-1'
        onClick={() => router.push(`/favorite`)}
      >
        <MdArrowBack className='h-8 w-8 text-mauve-12' />
      </button>

      <EditMenu type='edit' />
    </div>
  );
};
