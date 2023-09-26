'use client';

import { tv } from 'tailwind-variants';

import { RecipeHeader } from '@/app/(defaultLayout)/mypage/_components/edit-header';
import { EditMenu } from '@/app/(defaultLayout)/mypage/_components/edit-menu';
import { SubText } from '@/app/(defaultLayout)/mypage/_components/sub-text';
import { ActionButton } from '@/app/_components/action-button';
import { Button } from '@/app/_components/button';
import { Tabs } from '@/app/_components/tabs';

const layout = tv({
  slots: {
    base: 'm-auto flex max-w-[400px] flex-col gap-5', // TODO: ここでmax-wを指定せずサイドバーと合わせて指定した方がよさそう
    style: 'flex flex-wrap gap-x-3 gap-y-4 px-4 pt-2',
  },
});

const { base, style } = layout();

export default function HotRecipe({ params }: { params: { id: string } }) {
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
      <RecipeHeader />
      <div className='flex items-start justify-between gap-1 self-stretch'>
        <p className='text-2xl font-bold text-mauve-12'>
          グラタングラタングラタングラタングラタン
        </p>
        <EditMenu type='edit' />
      </div>
      <div className='flex gap-4 self-stretch'>
        <SubText label='お気に入り' value='456' />
      </div>
      <div className='grid h-full grid-cols-2 gap-4'>
        <ActionButton
          falsyLabel='お気に入りに追加済'
          truthyLabel='お気に入りに追加'
        />
        <Button variant='blackOutline'>レシピを編集</Button>
      </div>
      <div className={style()}>
        <Tabs tabs={tabs} />
      </div>
    </main>
  );
}
