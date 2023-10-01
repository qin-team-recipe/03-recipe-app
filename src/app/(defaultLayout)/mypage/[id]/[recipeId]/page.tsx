'use client';

import { useRouter } from 'next/navigation';
import { MdArrowBack } from 'react-icons/md';
import { tv } from 'tailwind-variants';

import { EditMenu } from '@/app/(defaultLayout)/mypage/_components/edit-menu';
import { SubText } from '@/app/(defaultLayout)/mypage/_components/sub-text';
import { ActionButton } from '@/app/_components/action-button';
import { Button } from '@/app/_components/button';
import { Tabs } from '@/app/_components/tabs';
import { Badge } from '@/app/_components/ui/ui/badge';
import { CopyButton } from '@/app/recipe/[recipeId]/_components/copy-button';
import { RecipeStepItem } from '@/app/recipe/[recipeId]/_components/recipe-step-item';

const layout = tv({
  base: 'm-auto flex max-w-[400px] flex-col gap-5', // TODO: ここでmax-wを指定せずサイドバーと合わせて指定した方がよさそう
});

export default function Recipe({
  params,
}: {
  params: { id: string; recipeId: string };
}) {
  const { id, recipeId } = params;
  const router = useRouter();

  const tabs = [
    {
      path: `/mypage/${id}/${recipeId}`,
      tabText: '作り方',
    },
    {
      path: `/mypage/${id}/${recipeId}/ingredients`,
      tabText: '材料',
    },
  ];

  return (
    <main className={layout()}>
      <div className='flex items-center justify-between gap-3'>
        <button
          className='flex h-8 w-8 items-center justify-center rounded-full p-1'
          onClick={() => router.push(`/mypage/${id}/new-recipes`)}
        >
          <MdArrowBack className='h-8 w-8 text-mauve-12' />
        </button>
      </div>
      <div className='flex items-start justify-between gap-1 self-stretch'>
        <p className='text-2xl font-bold text-mauve-12'>
          グラタングラタングラタングラタングラタン
        </p>
        <EditMenu type='edit' />
      </div>
      <div className='flex gap-4 self-stretch'>
        <Badge variant='default'>非公開</Badge>
        <SubText label='お気に入り' value='456' />
      </div>
      <div className='grid h-full grid-cols-2 gap-4'>
        <ActionButton
          falsyLabel='お気に入りに追加済'
          truthyLabel='お気に入りに追加'
        />
        <Button variant='blackOutline'>レシピを編集</Button>
      </div>
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
