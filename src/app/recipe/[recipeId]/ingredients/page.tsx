import { TbShoppingCartPlus } from 'react-icons/tb';

import { IngredientsItem } from '@/app/_components/ingredients-item/ingredients-item';

export default function Ingredients() {
  return (
    <main>
      <div className='mb-2 mt-4 flex justify-between px-2'>
        <p className='text-base font-bold'>2人前</p>
        {/* TODO: お買い物リストに追加処理 */}
        <button className='flex items-center'>
          <TbShoppingCartPlus className='h-4 w-4 text-[#908E96]' />
          <p className='text-base font-bold text-[#908E96]'>
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
