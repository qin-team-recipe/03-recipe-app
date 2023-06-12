import { FC } from 'react';
import { TbShoppingCartPlus } from 'react-icons/tb';
import { tv } from 'tailwind-variants';

const ingredientsItem = tv({
  slots: {
    base: 'flex justify-between gap-2 border-t border-[#DCDBDD] px-2 py-4',
    description: 'flex-col gap-1',
    textStyle: 'text-sm text-[#1A1523]',
    annotationStyle: 'text-xs text-[#86848D]',
    button: 'flex items-center justify-center',
    icon: 'h-5 w-5 text-[#6F6E77]',
  },
});

const { base, description, textStyle, annotationStyle, button, icon } =
  ingredientsItem();

type Props = {
  text: string;
  annotation: string;
  isLast?: boolean;
};

export const IngredientsItem: FC<Props> = ({
  text,
  annotation,
  isLast = false,
}) => (
  <div className={base({ class: isLast ? 'border-b' : '' })}>
    <div className={description()}>
      <p className={textStyle()}>{text}</p>
      <p className={annotationStyle()}>{annotation}</p>
    </div>
    {/* TODO: お買い物リストに追加処理 */}
    <button className={button()}>
      <TbShoppingCartPlus className={icon()} />
    </button>
  </div>
);
