import { FC } from 'react';
import { tv } from 'tailwind-variants';

const recipeStepItem = tv({
  slots: {
    base: 'flex gap-2 px-2 py-4 border-[#DCDBDD] border-b',
    circleNum:
      'h-5 w-5 min-w-[1.25rem] bg-[#CA3214] rounded-full text-sm text-center text-[#fff]',
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
