import { tv } from 'tailwind-variants';

import { ActionButton } from '@/app/_components/action-button';
import { SnsIcons } from '@/app/_components/sns-icons';
import { Tabs } from '@/app/_components/tabs';
import { Sns } from '@/app/_types';

export const metadata = {
  title: 'シェフ詳細',
  description: 'Generated by create next app',
};

const layout = tv({
  base: 'm-auto flex max-w-[400px] flex-col gap-5', // TODO: ここでmax-wを指定せずサイドバーと合わせて指定した方がよさそう
});

export default async function Layout({
  params,
  children,
}: {
  params: { chefId: string };
  children: React.ReactNode;
}) {
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
      <div className='flex items-center justify-end'>
        <SnsIcons snsList={snsList} />
      </div>
      <div className='flex justify-between gap-1 self-stretch'>
        <div className='flex flex-col items-start justify-center gap-1'>
          <p className='text-2xl font-bold text-mauve-12'>山田シェフ</p>
          <p className='text-sm text-mauve-12'>foobarid</p>
        </div>
        <div className='h-16 w-16 rounded-full bg-mauve-5' />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-sm text-mauve-12'>
          初の絵本出版！ 『 まねっこシェフ』 ・ふわふわ！スクランブルエッグ
          ・にぎにぎ！おにぎり 主婦の友社より３月３日、２冊同時発売！
          絶賛発売中！
        </p>
        <div className='flex gap-4 self-stretch'>
          <div className='flex items-center gap-1'>
            <p className='text-sm font-bold text-mauve-11'>123</p>
            <p className='text-sm text-mauve-11'>レシピ</p>
          </div>
          <div className='flex items-center gap-1'>
            <p className='text-sm font-bold text-mauve-11'>456</p>
            <p className='text-sm text-mauve-11'>フォロワー</p>
          </div>
        </div>
      </div>
      <ActionButton truthyLabel='フォローする' falsyLabel='フォロー中' />
      <div>
        <Tabs tabs={tabs} />
        {children}
      </div>
    </main>
  );
}

// TODO: APIから取得予定
const snsList: Sns[] = [
  { type: 'youtube', url: '' },
  { type: 'instagram', url: '' },
  { type: 'tiktok', url: '' },
  { type: 'twitter', url: '' },
  { type: 'facebook', url: '' },
];
