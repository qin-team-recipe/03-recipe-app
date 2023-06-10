import { FC } from 'react';

type Props = {
  index: number;
  text: string;
  annotation: string;
  isLast?: boolean;
};

export const RecipeStepItem: FC<Props> = ({ index, text, annotation }) => (
  <div className='flex gap-2 px-2 py-4 border-[#DCDBDD] border-b'>
    <div className='h-5 w-5 min-w-[1.25rem] bg-[#CA3214] rounded-full text-sm text-center text-[#fff]'>
      {index}
    </div>
    <div className='flex-col'>
      <p className='text-sm text-[#1A1523]'>{text}</p>
      <p className='text-xs text-[#86848D]'>{annotation}</p>
    </div>
  </div>
);
