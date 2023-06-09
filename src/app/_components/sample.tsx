import { FC } from 'react';

type Props = {
  text: string;
};

export const Sample: FC<Props> = ({ text }) => (
  <div className='bg-blue-200'>
    <p className='m-4 p-2 text-sm text-red-200'>{text}</p>
  </div>
);
