import type { Meta, StoryObj } from '@storybook/react';

import { RecipeDetail } from './recipe-detail';

const meta: Meta<typeof RecipeDetail> = {
  title: 'Recipe/RecipeDetail',
  component: RecipeDetail,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RecipeDetail>;

export const Primary: Story = {
  args: {
    recipeName: 'recipeName',
  },
};
