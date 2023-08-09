import { FC } from 'react';
import { RxCross2 } from 'react-icons/rx';

export const Header: FC = () => {
  return (
    <div className='border-mauve-dim relative flex h-12 items-center justify-between border-b'>
      <div className='block p-3 outline-none ring-inset focus-visible:ring-2 focus-visible:ring-mauve-7 '>
        <RxCross2 className='h-5 w-5' />
      </div>

      <div className='flex items-center'>
        <div className='text-mauve-dim p-3 font-bold ring-inset focus-visible:ring-2 focus-visible:ring-mauve-7'>
          下書き一覧
        </div>
        <div className='text-tomato-dim p-3 font-bold ring-inset focus-visible:ring-2 focus-visible:ring-mauve-7 '>
          作成する
        </div>
      </div>
    </div>
  );
};
