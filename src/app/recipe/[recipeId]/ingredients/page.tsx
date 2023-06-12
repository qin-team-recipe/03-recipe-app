import { TbShoppingCartPlus } from 'react-icons/tb';
import { tv } from 'tailwind-variants';

import { IngredientsItem } from '@/app/_components/ingredients-item/ingredients-item';

const ingredientsStyle = tv({
  slots: {
    base: 'mb-2 mt-4 flex justify-between px-2',
    text: 'text-base font-bold',
    icon: 'h-4 w-4 text-[#908E96]',
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
          <p className={text({ class: 'text-[#908E96]' })}>
            まとめてお買い物に追加
          </p>
        </button>
      </div>
      {ingredients.map((ingredient, i) => (
        <IngredientsItem
          key={i}
          text={ingredient.text}
          annotation={ingredient.annotation}
          isLast={ingredients.length - 1 === i}
        />
      ))}
    </main>
  );
}

const ingredients = [
  { text: 'キャベツ', annotation: '5~6枚' },
  { text: 'キャベツ', annotation: '5~6枚' },
  { text: 'キャベツ', annotation: '5~6枚' },
  { text: 'キャベツ', annotation: '5~6枚' },
];
