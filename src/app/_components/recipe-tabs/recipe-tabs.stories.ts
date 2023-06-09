import type { Meta, StoryObj } from '@storybook/react';

import { RecipeTabsTemplate } from './recipe-tabs';

const meta: Meta<typeof RecipeTabsTemplate> = {
  title: 'Recipe/RecipeTabs',
  component: RecipeTabsTemplate,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RecipeTabsTemplate>;

export const Primary: Story = {
  args: {
    recipeId: '1',
    isIngredients: true,
  },
};
