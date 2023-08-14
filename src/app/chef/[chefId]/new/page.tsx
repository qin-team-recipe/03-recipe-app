import { tv } from 'tailwind-variants';

import { RecipeItem } from '@/app/_components/recipe-item';
import { Recipe } from '@/app/_types';

const style = tv({
  base: 'relative flex flex-wrap gap-x-3 gap-y-4 px-4 pt-2',
});

export default function New() {
  return (
    <main>
      <div className={style()}>
        {recipeListItem.map((item) => (
          <RecipeItem key={item.id} recipeItem={item} />
        ))}
        <button className='absolute bottom-7 right-24 h-12 w-[200px] rounded-full bg-tomato-9 px-2 py-3 text-mauve-1'>
          レシピを追加する
        </button>
      </div>
    </main>
  );
}

const recipeListItem: Recipe[] = [
  {
    id: '1',
    img: '',
    title: 'トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン',
    chef: 'ウルトラハイパー超すごいしまぶーシェフ',
    like: 1234,
  },
  {
    id: '2',
    img: '',
    title: 'トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン',
    chef: 'ウルトラハイパー超すごいしまぶーシェフ',
    like: 1234,
  },
  {
    id: '3',
    img: '',
    title: 'グラタン',
    chef: 'マイレシピ',
    like: 0,
  },
  {
    id: '4',
    img: '',
    title: 'トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン',
    chef: 'ウルトラハイパー超すごいしまぶーシェフ',
    like: 1234,
  },
  {
    id: '5',
    img: '',
    title: 'トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン',
    chef: 'ウルトラハイパー超すごいしまぶーシェフ',
    like: 1234,
  },
];
