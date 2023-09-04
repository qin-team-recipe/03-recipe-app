'use client';

import { tv } from 'tailwind-variants';

import { Tabs } from '@/app/_components/tabs';
import { RecipeDetail } from '@/app/mypage/recipe/_components/recipe-detail/recipe-detail';
import { CopyButton } from '@/app/recipe/[recipeId]/_components/copy-button';
import { RecipeStepItem } from '@/app/recipe/[recipeId]/_components/recipe-step-item';

const layout = tv({
  base: 'm-auto flex max-w-[400px] flex-col gap-5', // TODO: ここでmax-wを指定せずサイドバーと合わせて指定した方がよさそう
});

export default function Recipe({ params }: { params: { recipeId: string } }) {
  const { recipeId } = params;

  const tabs = [
    {
      path: `/recipe/${recipeId}`,
      tabText: '作り方',
    },
    {
      path: `/recipe/${recipeId}/ingredients`,
      tabText: '材料',
    },
  ];

  return (
    <main className={layout()}>
      <RecipeDetail recipeName='グラタングラタングラタングラタン' />
      <div>
        <Tabs tabs={tabs} />
        {recipeItems.map((item, i) => (
          <RecipeStepItem key={i} index={i + 1} text={item.text} />
        ))}
        <div className='m-2 flex justify-end'>
          <CopyButton recipeItems={recipeItems} />
        </div>
      </div>
    </main>
  );
}

const recipeItems = [
  {
    text: '用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。',
  },
  {
    text: '用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。',
  },
  {
    text: '用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。',
  },
  {
    text: '用意するメインの材料は、マカロニ、牛乳、鶏もも肉、玉ねぎ、椎茸で、バター、小麦粉、塩、こしょうも使用します。',
  },
];
