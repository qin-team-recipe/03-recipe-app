import { FC } from 'react';
import { tv } from 'tailwind-variants';

const recipeStepItem = tv({
  slots: {
    base: 'flex gap-2 border-b border-[#DCDBDD] px-2 py-4',
    circleNum:
      'h-5 w-5 min-w-[1.25rem] rounded-full bg-[#CA3214] text-center text-sm text-white',
    description: 'flex-col',
    textStyle: 'text-sm text-[#1A1523]',
    annotationStyle: 'text-xs text-[#86848D]',
  },
});

const { base, circleNum, description, textStyle, annotationStyle } =
  recipeStepItem();

type Props = {
  index: number;
  text: string;
  annotation: string;
  isLast?: boolean;
};

export const RecipeStepItem: FC<Props> = ({ index, text, annotation }) => (
  <div className={base()}>
    <div className={circleNum()}>{index}</div>
    <div className={description()}>
      <p className={textStyle()}>{text}</p>
      <p className={annotationStyle()}>{annotation}</p>
    </div>
  </div>
);
