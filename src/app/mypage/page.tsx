import { tv } from 'tailwind-variants';

import { Button } from '@/app/_components/button';
import { RecipeItem } from '@/app/_components/recipe-item';
import { Tabs } from '@/app/_components/tabs';
import { Recipe } from '@/app/_types';
import { EditMenu } from '@/app/mypage/_components/edit-menu';
import { SubText } from '@/app/mypage/_components/sub-text';

const style = tv({
  slots: {
    layout: 'm-auto flex max-w-[400px] flex-col gap-5',
    base: 'flex flex-wrap gap-x-3 gap-y-4 px-4 pt-2',
  },
});
const { layout, base } = style();

export default function HotRecipes({ params }: { params: { chefId: string } }) {
  const { chefId } = params;
  const tabs = [
    {
      path: `/chef/${chefId}/new-recipes`,
      tabText: '新着レシピ',
    },
    {
      path: `/chef/${chefId}/hot-recipes`,
      tabText: '人気レシピ',
    },
  ];

  return (
    <main className={layout()}>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-end'>
          <EditMenu type='mypage' />
        </div>
        <div className='flex flex-col items-start justify-center gap-1'>
          <p className='text-2xl font-bold text-mauve-12'>山田シェフ</p>
          <p className='text-sm text-mauve-12'>foobarid</p>
        </div>
        <div className='flex gap-4 self-stretch'>
          <SubText label='レシピ' value='123' />
          <SubText label='フォロワー' value='456' />
        </div>
        <Button variant='blackOutline'>プロフィールを編集</Button>
      </div>
      <div>
        <Tabs tabs={tabs} />
        <div className={base()}>
          {recipeListItem.map((item) => (
            <RecipeItem key={item.id} recipeItem={item} />
          ))}
        </div>
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
