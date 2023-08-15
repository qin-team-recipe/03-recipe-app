'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { BiArrowBack } from 'react-icons/bi';

import { Tabs } from '@/app/_components/tabs';
import { SearchInput } from '@/app/search/_components/search-input';

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
  const path = usePathname();

  const title =
    q === ''
      ? path === '/search/recipe'
        ? '話題のレシピ'
        : 'シェフ一覧'
      : `「${decodeURI(q)}」で検索`;

  return (
    <div className='w-full'>
      <div className='mb-2 flex h-9 items-center gap-x-4 px-4'>
        <Link href='/'>
          <BiArrowBack size='1.25rem' className='text-mauve-11' />
        </Link>
        <SearchInput path={path} />
      </div>
      <Tabs tabs={tabs} />
      <p className='gap-0 px-4 pt-5 text-xl font-bold text-mauve-12'>{title}</p>
    </div>
  );
};
