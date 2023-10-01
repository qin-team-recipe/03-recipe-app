import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { tv } from 'tailwind-variants';

import { Recipe } from '@/app/_types';

const recipeItem = tv({
  slots: {
    base: 'w-[calc(50%_-_6px)] ',
    recipeImg: 'relative aspect-square rounded-2xl bg-tomato-4',
    favBox:
      'absolute right-2 top-2 flex h-[26px] w-[67px] items-center justify-center gap-x-1 rounded-2xl bg-mauve-10/50',
    favText: 'text-sm text-whitea-12',
    recipeTitle:
      'line-clamp-2 pt-2 text-xs font-bold leading-[18px] text-mauve-12',
    chefName: 'truncate pt-1 text-[10px] leading-3 text-mauve-11',
  },
});

const { base, recipeImg, favBox, favText, recipeTitle, chefName } =
  recipeItem();

type Props = {
  recipeItem: Recipe;
  path: string;
};

export const RecipeItem: FC<Props> = ({ recipeItem, path }) => {
  return (
    <Link
      href={`${path}/${recipeItem.id}`}
      key={recipeItem.id}
      className={base()}
    >
      <div className={recipeImg()}>
        {/* imgが入る */}
        <div></div>
        {/* マイレシピだったらライクは仕様上表示させない？ */}
        {recipeItem.like !== 0 && (
          <div className={favBox()}>
            <AiOutlineHeart size='14px' color='white' />
            <p className={favText()}>{recipeItem.like}</p>
          </div>
        )}
      </div>
      <p className={recipeTitle()}>{recipeItem.title}</p>
      <p className={chefName()}>{recipeItem.chef}</p>
    </Link>
  );
};
