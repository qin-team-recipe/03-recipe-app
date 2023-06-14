import { BiArrowBack } from 'react-icons/bi';

import { SearchBox } from '@/app/_components/search-box';
import { Tabs } from '@/app/_components/tabs';

type Props = {
  children: React.ReactNode;
};

const tabs = [
  {
    path: `/search`,
    tabText: 'すべて',
  },
  {
    path: `/search/chef`,
    tabText: 'シェフ',
  },
  {
    path: `/search/recipe`,
    tabText: 'レシピ',
  },
];

export default function Layout({ children }: Props) {
  return (
    <main className='mx-auto flex max-w-[490px] flex-col gap-y-2 pt-2'>
      <div className='flex h-9 items-center gap-x-4 px-4'>
        <BiArrowBack size='1.25rem' color='#6F6E77' />
        <SearchBox />
      </div>
      <Tabs tabs={tabs} />
      <div className='flex flex-wrap gap-x-3 gap-y-4 px-4 pt-3'>{children}</div>
    </main>
  );
}
