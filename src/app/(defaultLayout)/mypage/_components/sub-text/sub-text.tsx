import { FC } from 'react';

type Props = {
  label: string;
  value: string;
};

export const SubText: FC<Props> = ({ label, value }) => {
  return (
    <div className='flex items-center gap-1'>
      <p className='text-sm font-bold text-mauve-11'>{value}</p>
      <p className='text-sm text-mauve-11'>{label}</p>
    </div>
  );
};
