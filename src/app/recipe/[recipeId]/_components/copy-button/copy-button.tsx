'use client';
import { FC } from 'react';
import { FiCopy } from 'react-icons/fi';
import { tv } from 'tailwind-variants';

const copyButton = tv({
  base: 'flex items-center gap-0.5 text-xs text-blue-11',
});

type RecipeItem = {
  text: string;
};

type Props = {
  recipeItems: RecipeItem[];
};

export const CopyButton: FC<Props> = ({ recipeItems }) => {
  const saveToClipboard = () => {
    const clipboardText = recipeItems
      .map((item, i) => `${i + 1}:${item.text}`)
      .join('\n');

    navigator.clipboard.writeText(clipboardText);
  };

  return (
    <button onClick={saveToClipboard}>
      <div className={copyButton()}>
        <FiCopy />
        <p>コピーする</p>
      </div>
    </button>
  );
};
