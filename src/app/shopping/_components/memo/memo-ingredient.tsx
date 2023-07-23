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
        {props.ingredient.checked ? (
          <RiCheckboxCircleFill className='text-mauve-8' size='28px' />
        ) : (
          <RiCheckboxBlankCircleLine className='text-tomato-9' size='28px' />
        )}
        <p className='mr-auto'>{props.ingredient.name}</p>

        <HiOutlineDotsVertical />
      </div>
    </div>
  );
};
