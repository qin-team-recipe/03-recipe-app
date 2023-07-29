import { TbShoppingCartPlus } from 'react-icons/tb';
import { tv } from 'tailwind-variants';

import { IngredientsItem } from '@/app/recipe/[recipeId]/ingredients/_components/ingredients-item';

const ingredientsStyle = tv({
  slots: {
    base: 'mb-2 mt-4 flex justify-between px-2',
    text: 'text-base font-bold text-mauve-12',
    icon: 'h-4 w-4 text-mauve-9',
    button: 'flex items-center gap-1',
  },
});

const { base, text, icon, button } = ingredientsStyle();

export default function Ingredients() {
  return (
    <main>
      <div className={base()}>
        <p className={text()}>2人前</p>
        {/* TODO: お買い物リストに追加処理 */}
        <button className={button()}>
          <TbShoppingCartPlus className={icon()} />
          <p className={text({ class: 'text-mauve-9' })}>
            まとめてお買い物に追加
          </p>
        </button>
      </div>
      {ingredients.map((ingredient, i) => (
        <IngredientsItem
          key={i}
          text={ingredient.text}
          isLast={ingredients.length - 1 === i}
        />
      ))}
    </main>
  );
}

const ingredients = [
  { text: 'キャベツ' },
  { text: 'キャベツ' },
  { text: 'キャベツ' },
  { text: 'キャベツ' },
];
