'use client';

import { FC } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

type Props = {
  //
};

// TODO: popover で選択肢を選べるようにする。

export const MemoPlusIcon: FC<Props> = () => {
  return (
    <>
      <AiOutlinePlus className='h-5 w-5' />
    </>
  );
};
