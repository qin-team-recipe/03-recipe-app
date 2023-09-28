'use client';

import { TbShoppingCartPlus } from 'react-icons/tb';
import { tv } from 'tailwind-variants';

import { RecipeHeader } from '@/app/(defaultLayout)/mypage/_components/edit-header';
import { EditMenu } from '@/app/(defaultLayout)/mypage/_components/edit-menu';
import { SubText } from '@/app/(defaultLayout)/mypage/_components/sub-text';
import { ActionButton } from '@/app/_components/action-button';
import { Button } from '@/app/_components/button';
import { Tabs } from '@/app/_components/tabs';
import { Badge } from '@/app/_components/ui/ui/badge';
import { IngredientsItem } from '@/app/recipe/[recipeId]/ingredients/_components/ingredients-item';

const layout = tv({
  slots: {
    base: 'm-auto flex max-w-[400px] flex-col gap-5', // TODO: ここでmax-wを指定せずサイドバーと合わせて指定した方がよさそう
    ingredient: 'mb-2 mt-4 flex justify-between px-2',
    text: 'text-base font-bold text-mauve-12',
    icon: 'h-4 w-4 text-mauve-9',
    button: 'flex items-center gap-1',
  },
});

const { base, ingredient, text, icon, button } = layout();

export default function Ingredients({
  params,
}: {
  params: { id: string; recipeId: string };
}) {
  const { id, recipeId } = params;

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
    <main className={base()}>
      <RecipeHeader />
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
        <div className={ingredient()}>
          <p className={text()}>2人前</p>
          {/* TODO: お買い物リストに追加処理 */}
          <button className={button()}>
            <TbShoppingCartPlus className={icon()} />
            <p className={text({ class: 'text-mauve-9' })}>
              まとめてお買い物に追加
            </p>
          </button>
        </div>
        {ingredients.map((ingredient, i) => (
          <IngredientsItem
            key={i}
            text={ingredient.text}
            isLast={ingredients.length - 1 === i}
          />
        ))}
      </div>
    </main>
  );
}
const ingredients = [
  { text: 'キャベツ' },
  { text: 'キャベツ' },
  { text: 'キャベツ' },
  { text: 'キャベツ' },
];
