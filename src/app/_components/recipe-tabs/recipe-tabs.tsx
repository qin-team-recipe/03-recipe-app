'use client';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { FC } from 'react';

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
    <nav className='text-center'>
      <Link
        href={`/recipe/${recipeId}`}
        className={`w-6/12 inline-block p-2 border-b ${
          !isIngredients ? 'font-semibold border-b-2 border-[#1A1523]' : ''
        }`}
      >
        <div className='text-[#1A1523]'>作り方</div>
      </Link>
      <Link
        href={`/recipe/${recipeId}/ingredients`}
        className={`w-6/12 inline-block p-2 border-b ${
          isIngredients ? 'font-semibold border-b-2 border-[#1A1523]' : ''
        }`}
      >
        <div className='text-[#1A1523]'>材料</div>
      </Link>
    </nav>
  );
};
