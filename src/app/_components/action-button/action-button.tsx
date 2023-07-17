'use client';
import { useState } from 'react';
import { tv } from 'tailwind-variants';

const button = tv({
  base: 'flex w-full items-center justify-center rounded border border-[#E54D2E] px-3 py-1',
  variants: {
    isActive: {
      true: 'bg-[#E54D2E] text-white',
      false: 'bg-white text-[#E54D2E]',
    },
  },
});

type Props = {
  truthyLabel: string;
  falsyLabel: string;
  //   isActive: boolean;
};

export const ActionButton: React.FC<Props> = ({
  truthyLabel,
  falsyLabel,
  //   isActive,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={button({ isActive })}
      // TODO: バックエンド側の更新処理
      onClick={() => setIsActive(!isActive)}
    >
      {isActive ? truthyLabel : falsyLabel}
    </button>
  );
};
