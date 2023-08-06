import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';
import { tv } from 'tailwind-variants';

import { SearchBox } from '@/app/_components/search-box';

type RecipeList = {
  id: string;
  img: string;
  title: string;
  chef: string;
  like: number;
};

const recipeListItem: RecipeList[] = [
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

// eslint-disable-next-line tailwindcss/no-custom-classname
const searchRecipe = tv({
  slots: {
    recipeList: 'flex flex-wrap gap-x-3 gap-y-4 px-4 pt-2',
    recipeItem: 'w-[calc(50%_-_6px)] ',
    recipeImg: 'relative aspect-square rounded-2xl bg-tomato-4',
    favBox:
      'absolute right-2 top-2 flex h-[26px] w-[67px] items-center justify-center gap-x-1 rounded-2xl bg-mauve-10/50',
    favText: 'text-sm text-whitea-12',
    recipeTitle:
      'line-clamp-2 pt-2 text-xs font-bold leading-[18px] text-mauve-12',
    chefName: 'truncate pt-1 text-[10px] leading-3 text-mauve-11',
  },
});

const {
  recipeList,
  recipeItem,
  recipeImg,
  favBox,
  favText,
  recipeTitle,
  chefName,
} = searchRecipe();

export default async function SearchRecipe({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { q } = searchParams as { [key: string]: string };

  return (
    <>
      <SearchBox q={q} />
      <div className={recipeList()}>
        {recipeListItem.map((item) => (
          <Link
            href={`/recipe/${item.id}`}
            key={item.id}
            className={recipeItem()}
          >
            <div className={recipeImg()}>
              {/* imgが入る */}
              <div></div>
              {/* マイレシピだったらライクは仕様上表示させない？ */}
              {item.like !== 0 && (
                <div className={favBox()}>
                  <AiOutlineHeart size='14px' color='white' />
                  <p className={favText()}>{item.like}</p>
                </div>
              )}
            </div>
            <p className={recipeTitle()}>{item.title}</p>
            <p className={chefName()}>{item.chef}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
