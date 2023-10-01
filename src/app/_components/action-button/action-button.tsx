'use client';
import { useState } from 'react';
import { tv } from 'tailwind-variants';

const button = tv({
  base: 'flex w-full items-center justify-center rounded border border-tomato-9 px-3 text-sm',
  variants: {
    isActive: {
      true: 'bg-tomato-9 text-mauve-1',
      false: 'bg-mauve-1 text-tomato-9',
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
