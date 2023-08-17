'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';

import { Button } from '@/app/_components/button';

export const AddButton: FC = () => {
  const router = useRouter();

  // TODO: マイレシピ追加画面へ遷移
  const navigateToMyRecipe = () => router.push(`/`);

  return (
    <Button
      variant='tomato'
      size='md'
      className='w-[200px] rounded-full'
      onClick={navigateToMyRecipe}
    >
      レシピを追加する
    </Button>
  );
};
