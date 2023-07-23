import { FC } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoEllipsisHorizontalCircle } from 'react-icons/io5';

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
        <AiOutlinePlus className='mr-4 h-5 w-5' />
        <IoEllipsisHorizontalCircle className='h-5 w-5' />
      </div>
    </div>
  );
};
