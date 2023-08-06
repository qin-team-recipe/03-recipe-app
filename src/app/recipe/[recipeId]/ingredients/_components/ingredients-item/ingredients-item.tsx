import { FC } from 'react';
import { TbShoppingCartPlus } from 'react-icons/tb';
import { tv } from 'tailwind-variants';

const ingredientsItem = tv({
  slots: {
    base: 'flex justify-between gap-2 border-t border-mauve-7 px-2 py-4',
    textStyle: 'text-sm text-mauve-12',
    button: 'flex items-center justify-center',
    icon: 'h-5 w-5 text-mauve-9',
  },
});

const { base, textStyle, button, icon } = ingredientsItem();

type Props = {
  text: string;
  isLast?: boolean;
};

export const IngredientsItem: FC<Props> = ({ text, isLast = false }) => (
  <div className={base({ class: isLast ? 'border-b' : '' })}>
    <p className={textStyle()}>{text}</p>
    {/* TODO: お買い物リストに追加処理 */}
    <button className={button()}>
      <TbShoppingCartPlus className={icon()} />
    </button>
  </div>
);
