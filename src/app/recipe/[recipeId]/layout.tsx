import { tv } from 'tailwind-variants';

import { ActionButton } from '@/app/_components/action-button/action-button';
import { RecipeDetail } from '@/app/_components/recipe-detail/recipe-detail';
import { Tabs } from '@/app/_components/tabs';

export const metadata = {
  title: 'レシピ詳細',
  description: 'Generated by create next app',
};

const layout = tv({
  base: 'm-auto max-w-[400px]', // TODO: ここでmax-wを指定せずサイドバーと合わせて指定した方がよさそう
});

export default async function Layout({
  params,
  children,
}: {
  params: { recipeId: string };
  children: React.ReactNode;
}) {
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
      <RecipeDetail
        chefName='しまぶーシェフ'
        chefId='1'
        recipeTitle='グラタン'
        description='はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。ソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。'
        favorite={1}
        isFavorite={false}
      >
        <ActionButton
          truthyLabel='お気に入りから削除'
          falsyLabel='お気に入りに追加'
        />
      </RecipeDetail>
      <Tabs tabs={tabs} />
      {children}
    </main>
  );
}
