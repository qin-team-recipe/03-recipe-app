'use client';

import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { ChangeEvent, FC, useEffect, useState, useTransition } from 'react';
import { RxCross2 } from 'react-icons/rx';

const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const SearchBox: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();
  const [isPending, startTransition] = useTransition();
  const [text, setText] = useState('');

  const newParams = new URLSearchParams(searchParams.toString());

  useEffect(() => {
    if (text !== '') {
      newParams.set('q', text);
    } else {
      newParams.delete('q');
    }
    router.push(createUrl(path, newParams));
  }, [text]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    startTransition(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
    });
  };

  return (
    <div
      className='flex h-full flex-1 items-center rounded-lg bg-[#EEEDEF]
        pl-4 pr-3 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-300'
    >
      <input
        type='text'
        name='search'
        className='flex-1 bg-[#EEEDEF] pr-3 font-bold outline-none '
        placeholder='シェフやレシピを検索'
        autoComplete='off'
        onChange={handleChange}
        value={text}
      />
      {isPending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent' />
      ) : text !== '' ? (
        <button onClick={() => setText('')} className='w-5'>
          <RxCross2 size='1.25rem' />
        </button>
      ) : null}
    </div>
  );
};
