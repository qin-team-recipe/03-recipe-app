import { FC } from 'react';

type Props = {
  text: string;
  annotation: string;
  isLast?: boolean;
};

export const RecipeStepItem: FC<Props> = ({
  text,
  annotation,
  isLast = false,
}) => (
  <li
    className={`flex gap-2 px-2 py-4 border-gray-200 ${
      isLast ? 'border-t border-b' : 'border-t'
    }`}
  >
    <span>1</span>
    <div className='flex-col'>
      <p className='text-base font-bold'>{text}</p>
      <p className='text-sm text-gray-500'>{annotation}</p>
    </div>
  </li>
);
