import {
  ReadonlyURLSearchParams,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { ChangeEvent, FC, useEffect, useState, useTransition } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { tv } from 'tailwind-variants';

// eslint-disable-next-line tailwindcss/no-custom-classname
const searchInput = tv({
  slots: {
    container:
      'flex h-full flex-1 items-center rounded-lg bg-mauve-4 pl-4 pr-3 focus-within:ring-2 focus-within:ring-inset focus-within:ring-mauve-7',
    input: 'flex-1 bg-mauve-4 pr-3 font-bold outline-none',
    loading:
      'h-5 w-5 animate-spin rounded-full border-2 border-blacka-12 border-t-transparent',
  },
});

const { container, input, loading } = searchInput();

const createUrl = (
  path: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${path}${queryString}`;
};

export const SearchInput: FC<{ path: string }> = ({ path }) => {
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [text, setText] = useState('');
  const router = useRouter();

  const newParams = new URLSearchParams(searchParams.toString());

  useEffect(() => {
    if (text !== '') {
      newParams.set('q', encodeURIComponent(text));
    } else {
      newParams.delete('q');
    }
    const timeoutId = setTimeout(() => {
      router.push(createUrl(path, newParams));
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    startTransition(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
    });
  };

  return (
    <div className={container()}>
      <input
        type='text'
        name='search'
        className={input()}
        placeholder='シェフやレシピを検索'
        autoComplete='off'
        onChange={handleChange}
        value={text}
      />
      {isPending ? (
        <div className={loading()} />
      ) : text !== '' ? (
        <button onClick={() => setText('')} className='w-5'>
          <RxCross2 size='1.25rem' />
        </button>
      ) : null}
    </div>
  );
};
