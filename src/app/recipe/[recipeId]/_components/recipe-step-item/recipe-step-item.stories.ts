import type { Meta, StoryObj } from '@storybook/react';

import { RecipeStepItem } from './index';

const meta: Meta<typeof RecipeStepItem> = {
  title: 'Recipe/RecipeStepItem',
  component: RecipeStepItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RecipeStepItem>;

export const Primary: Story = {
  args: {
    text: 'テキスト',
    annotation: '注釈',
    index: 1,
  },
};
