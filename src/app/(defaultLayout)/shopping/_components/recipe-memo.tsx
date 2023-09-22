import { FC } from 'react';

import { MemoHeader } from '@/app/(defaultLayout)/shopping/_components/memo/memo-header';
import { MemoIngredient } from '@/app/(defaultLayout)/shopping/_components/memo/memo-ingredient';

type Props = {
  recipe: {
    name: string;
    ingredients: {
      name: string;
      checked: boolean;
    }[];
  };
};

export const RecipeMemo: FC<Props> = (props) => {
  return (
    <>
      <div className='border-mauve-dim border-b pb-2'>
        <MemoHeader isRecipe={true} recipeName={props.recipe.name} />
      </div>
      {props.recipe.ingredients.map((ingredient) => (
        <MemoIngredient key={ingredient.name} ingredient={ingredient} />
      ))}
    </>
  );
};
