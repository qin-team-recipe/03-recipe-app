import { RecipeTabs } from '@/app/_components/recipe-tabs';

export const metadata = {
  title: 'レシピ詳細',
  description: 'Generated by create next app',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div>料理画像</div>
      <div>料理タイトル</div>
      <div>料理説明</div>
      <div>お気に入り</div>
      <RecipeTabs />
      {children}
    </main>
  );
}