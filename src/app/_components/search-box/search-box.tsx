'use client';

import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { FC, FormEvent, useState } from 'react';
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
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = e.target as HTMLFormElement;
    const search = value.search as HTMLInputElement;
    setText(search.value);
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set('q', search.value);
    } else {
      newParams.delete('q');
    }

    router.push(createUrl(path, newParams));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex h-full flex-1 items-center rounded-lg bg-[#EEEDEF]
        pl-4 pr-1 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-300'
    >
      <input
        type='text'
        name='search'
        className='flex-1 bg-[#EEEDEF] font-bold outline-none '
        placeholder='シェフやレシピを検索'
        autoComplete='off'
        onChange={(e) => setText(e.target.value)}
        // value={text}
      />
      {text !== '' && (
        <button
          onClick={() => setText('')}
          className='grid w-8 place-items-center'
        >
          <RxCross2 size='1.25rem' />
        </button>
      )}
    </form>
  );
};
