import { FC } from 'react';
import { IoEllipsisHorizontalCircle } from 'react-icons/io5';

import { MemoPlusIcon } from '@/app/(defaultLayout)/shopping/_components/memo/memo-plus-icon';

type Props =
  | {
      isRecipe: true;
      recipeName: string;
    }
  | {
      isRecipe: false;
    };

export const MemoHeader: FC<Props> = (props) => {
  return (
    <div className='flex items-end justify-between px-4'>
      <h2 className='text-xl font-bold'>
        {props.isRecipe ? props.recipeName : 'じぶんメモ'}
      </h2>
      <div className='flex'>
        <div className='mr-4'>
          <MemoPlusIcon />
        </div>
        <IoEllipsisHorizontalCircle className='h-5 w-5' />
      </div>
    </div>
  );
};
