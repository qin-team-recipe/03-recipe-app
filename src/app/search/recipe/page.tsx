import { tv } from 'tailwind-variants';

import { RecipeItem } from '@/app/_components/recipe-item';
import { SearchBox } from '@/app/_components/search-box';
import { Recipe } from '@/app/_types';

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

const searchRecipe = tv({
  base: 'flex flex-wrap gap-x-3 gap-y-4 px-4 pt-2',
});

export default async function SearchRecipe({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { q } = searchParams as { [key: string]: string };

  return (
    <>
      <SearchBox q={q} />
      <div className={searchRecipe()}>
        {recipeListItem.map((item) => (
          <RecipeItem key={item.id} recipeItem={item} />
        ))}
      </div>
    </>
  );
}
