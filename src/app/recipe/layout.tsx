import { MdFavoriteBorder, MdArrowBack } from 'react-icons/md';
import { tv } from 'tailwind-variants';

import { RecipeTabs } from '@/app/_components/recipe-tabs';

const recipeTab = tv({
  slots: {
    main: 'm-auto max-w-[400px]', // TODO: ここでmax-wを指定せずサイドバーと合わせて指定した方がよさそう
    imageArea: 'aspect-square bg-red-200',
    back: 'absolute left-5 top-5 h-8 w-8',
    backIcon: 'h-8 w-8 text-white',
    fav: 'absolute bottom-0 right-0 m-2 h-[3.75rem] w-[3.75rem] rounded-full bg-[#908E96]',
    favArea: 'absolute left-3 top-[0.875rem] h-8 w-8',
    favIcon: 'h-9 w-9 text-white',
    recipeName: 'm-4 text-[28px] font-bold',
  },
});

const { main, imageArea, back, backIcon, fav, favArea, favIcon, recipeName } =
  recipeTab();

export const metadata = {
  title: 'レシピ詳細',
  description: 'Generated by create next app',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // TODO: レシピ詳細取得
  return (
    <main className={main()}>
      {/* 料理画像 */}
      <div className='relative'>
        <div className={imageArea()} />
        <div className={back()}>
          <MdArrowBack className={backIcon()} />
        </div>
        <div className={fav()}>
          <div className={favArea()}>
            {/* TODO: Favo/Unfavoの切り替え */}
            <MdFavoriteBorder className={favIcon()} />
          </div>
        </div>
      </div>
      {/* 料理名、説明文 */}
      <div>
        <p className={recipeName()}>グラタン</p>
        <p className='m-4'>
          はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。
          ソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。
        </p>
        {/* お気に入り */}
        <div className='m-4 flex gap-2'>
          <p className='font-bold'>789</p>
          <p className='text-[#6F6E77]'>お気に入り</p>
        </div>
      </div>
      <RecipeTabs />
      {children}
    </main>
  );
}
