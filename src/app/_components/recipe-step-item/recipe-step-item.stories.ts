import type { Meta, StoryObj } from '@storybook/react';

import { RecipeStepItem } from './index';

const meta: Meta<typeof RecipeStepItem> = {
  title: 'Recipe/RecipeStepItem',
  component: RecipeStepItem,
};

export default meta;
type Story = StoryObj<typeof RecipeStepItem>;

export const Primary: Story = {
  args: {
    text: 'テキスト',
    annotation: '注釈',
  },
};
