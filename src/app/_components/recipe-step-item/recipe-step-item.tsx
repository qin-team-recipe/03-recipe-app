import { FC } from 'react';

type Props = {
  index: number;
  text: string;
  annotation: string;
  isLast?: boolean;
};

export const RecipeStepItem: FC<Props> = ({ index, text, annotation }) => (
  <div className='flex gap-2 px-2 py-4 border-gray-200 border-b'>
    <div className='h-5 w-5 min-w-[1.25rem] bg-red-200 rounded-full text-sm text-center'>
      {index}
    </div>
    <div className='flex-col'>
      <p className='text-base'>{text}</p>
      <p className='text-sm text-gray-500'>{annotation}</p>
    </div>
  </div>
);
