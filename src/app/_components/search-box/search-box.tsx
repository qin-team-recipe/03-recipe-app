import Link from 'next/link';
import { FC } from 'react';
import { BiArrowBack } from 'react-icons/bi';

import { SearchInput } from '@/app/_components/search-input';
import { Tabs } from '@/app/_components/tabs';

const tabs = [
  {
    path: `/search/recipe`,
    tabText: 'レシピ',
  },
  {
    path: `/search/chef`,
    tabText: 'シェフ',
  },
];

type Props = {
  q: string;
};

export const SearchBox: FC<Props> = ({ q = '' }) => {
  return (
    <div className='w-full'>
      <div className='mb-2 flex h-9 items-center gap-x-4 px-4'>
        <Link href='/'>
          <BiArrowBack size='1.25rem' className='text-mauve-11' />
        </Link>
        <SearchInput />
      </div>
      <Tabs tabs={tabs} />
      <p className='gap-0 px-4 pt-5 text-xl font-bold text-mauve-12'>
        {q === '' ? '話題のレシピ' : `「${decodeURI(q)}」で検索`}
      </p>
    </div>
  );
};
