'use client';

import { tv } from 'tailwind-variants';

import { MypageHeader } from '@/app/(defaultLayout)/mypage/_components/mypage-header';
import { SubText } from '@/app/(defaultLayout)/mypage/_components/sub-text';
import { Button } from '@/app/_components/button';
import { RecipeItem } from '@/app/_components/recipe-item';
import { Tabs } from '@/app/_components/tabs';
import { Recipe } from '@/app/_types';

const layout = tv({
  slots: {
    base: 'm-auto flex max-w-[400px] flex-col gap-5', // TODO: ここでmax-wを指定せずサイドバーと合わせて指定した方がよさそう
    style: 'flex flex-wrap gap-x-3 gap-y-4 px-4 pt-2',
  },
});

const { base, style } = layout();

export default function NewRecipe({ params }: { params: { id: string } }) {
  const { id } = params;

  const tabs = [
    {
      path: `/mypage/${id}/new-recipes`,
      tabText: '新着レシピ',
    },
    {
      path: `/mypage/${id}/hot-recipes`,
      tabText: '人気レシピ',
    },
  ];

  return (
    <main className={base()}>
      <MypageHeader />
      <div className='flex justify-between gap-1 self-stretch'>
        <div className='flex flex-col items-start justify-center gap-1'>
          <p className='text-2xl font-bold text-mauve-12'>山田シェフ</p>
          <p className='text-sm text-mauve-12'>foobarid</p>
        </div>
      </div>
      <div className='flex gap-4 self-stretch'>
        <SubText label='レシピ' value='123' />
        <SubText label='フォロワー' value='456' />
      </div>
      <Button variant='blackOutline'>プロフィールを編集</Button>
      <div className={style()}>
        <Tabs tabs={tabs} />
        {recipeListItem.map((item) => (
          <RecipeItem key={item.id} recipeItem={item} path={`/mypage/${id}`} />
        ))}
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
