'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { tv } from 'tailwind-variants';

import { EditMenu } from '@/app/mypage/_components/edit-menu';

const recipeDetail = tv({
  slots: {
    base: 'flex items-center justify-center gap-3',
    detail: 'flex justify-between',
    text: 'text-xl font-bold text-mauve-12',
  },
});

const { detail, text } = recipeDetail();

type Props = {
  recipeName: string;
};

export const RecipeDetail: FC<Props> = ({ recipeName }) => {
  const router = useRouter();

  return (
    <div className='flex flex-col'>
      <button
        className='flex h-8 w-8 items-center justify-center rounded-full p-1'
        onClick={() => {
          if (window.history.length > 1) {
            router.back();
          } else {
            router.push(`/mypage`);
          }
        }}
      >
        <MdArrowBack className='h-8 w-8 text-mauve-12' />
      </button>

      <div className={detail()}>
        <p className={text()}>{recipeName}</p>
        <EditMenu type='edit' />
      </div>
    </div>
  );
};
