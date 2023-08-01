import { FC } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from 'react-icons/ri';

type Props = {
  ingredient: {
    name: string;
    checked: boolean;
  };
};

export const MemoIngredient: FC<Props> = (props) => {
  return (
    <div className='border-mauve-dim border-b'>
      <div className='flex items-center gap-x-2 px-4 py-2'>
        <div>
          {props.ingredient.checked ? (
            <RiCheckboxCircleFill className='h-8 w-8 text-mauve-8' />
          ) : (
            <RiCheckboxBlankCircleLine className='h-8 w-8 text-tomato-9' />
          )}
        </div>
        <p className='mr-auto'>{props.ingredient.name}</p>
        <div>
          <HiOutlineDotsVertical />
        </div>
      </div>
    </div>
  );
};
