import { FC } from 'react';

export const Form: FC = () => {
  return (
    <div className='space-y-8 py-5'>
      <div className='space-y-2'>
        <div className='flex items-end justify-between px-4 font-bold'>
          <div className='text-mauve-normal text-base'>レシピ名</div>
        </div>
        <div>
          <div className='relative flex items-center'>
            <input
              type='text'
              className='block w-full border-x-0 border-y border-y-mauve-7 px-4 placeholder:text-mauve-9 focus:z-10 focus:border-x-0 focus:border-y-mauve-8 focus-visible:ring-inset focus-visible:ring-mauve-8 dark:bg-mauvedark-2 dark:focus:border-y-mauvedark-8 dark:focus-visible:ring-mauvedark-8'
              placeholder='例：肉じゃが'
              name='hoge'
            />
            <div className='absolute right-4 z-20 flex'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
