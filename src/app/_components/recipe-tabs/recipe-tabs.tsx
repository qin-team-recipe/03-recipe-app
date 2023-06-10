'use client';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { FC } from 'react';
import { tv } from 'tailwind-variants';

const recipeTab = tv({
  slots: {
    nav: 'text-center',
    link: 'inline-block w-6/12 border-b p-2',
    text: 'text-[#1A1523]',
    active: 'border-b-2 border-[#1A1523] font-semibold',
  },
});

const { nav, link, text, active } = recipeTab();

export const RecipeTabs: FC = () => {
  const pathname = usePathname();
  const params = useParams();
  const isIngredients = pathname.includes('ingredients');

  return (
    <RecipeTabsTemplate
      recipeId={params.recipeId}
      isIngredients={isIngredients}
    />
  );
};

type Props = {
  recipeId: string;
  isIngredients: boolean;
};

export const RecipeTabsTemplate: FC<Props> = ({ recipeId, isIngredients }) => {
  return (
    <nav className={nav()}>
      <Link
        href={`/recipe/${recipeId}`}
        className={link({
          class: !isIngredients ? active() : '',
        })}
      >
        <div className={text()}>作り方</div>
      </Link>
      <Link
        href={`/recipe/${recipeId}/ingredients`}
        className={link({
          class: isIngredients ? active() : '',
        })}
      >
        <div className={text()}>材料</div>
      </Link>
    </nav>
  );
};
