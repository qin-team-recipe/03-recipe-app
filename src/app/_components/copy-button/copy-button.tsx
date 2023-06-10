'use client';
import { FC } from 'react';
import { FiCopy } from 'react-icons/fi';

type RecipeItem = {
  text: string;
  annotation: string;
};

type Props = {
  recipeItems: RecipeItem[];
};

export const CopyButton: FC<Props> = ({ recipeItems }) => {
  const saveToClipboard = () => {
    const clipboardText = recipeItems
      .map((item, i) => `${i + 1}:${item.text}\n${item.annotation}`)
      .join('\n');

    navigator.clipboard.writeText(clipboardText);
  };

  return (
    <button onClick={saveToClipboard}>
      <div className='flex items-center gap-[2px] text-[#0066DB] text-xs'>
        <FiCopy />
        <p>コピーする</p>
      </div>
    </button>
  );
};
