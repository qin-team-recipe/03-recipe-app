import { FC } from 'react';
import { tv } from 'tailwind-variants';

const recipeStepItem = tv({
  slots: {
    base: 'flex gap-2 border-b border-mauve-7 px-2 py-4',
    circleNum:
      'h-5 w-5 min-w-[1.25rem] rounded-full bg-tomato-9 text-center text-sm text-mauve-1',
    textStyle: 'text-sm text-mauve-12',
  },
});

const { base, circleNum, textStyle } = recipeStepItem();

type Props = {
  index: number;
  text: string;
};

export const RecipeStepItem: FC<Props> = ({ index, text }) => (
  <div className={base()}>
    <div className={circleNum()}>{index}</div>
    <p className={textStyle()}>{text}</p>
  </div>
);
