'use client';

import { FC } from 'react';
import { tv } from 'tailwind-variants';

import { EditMenu } from '@/app/mypage/recipe/_components/edit-menu';

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
  return (
    <div className={detail()}>
      <p className={text()}>{recipeName}</p>
      <EditMenu />
    </div>
  );
};
