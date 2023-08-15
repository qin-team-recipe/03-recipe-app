import { Meta, StoryObj } from '@storybook/react';

import { RecipeItem } from '@/app/_components/recipe-item/recipe-item';

const meta: Meta<typeof RecipeItem> = {
  title: 'recipe/RecipeItem',
  component: RecipeItem,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RecipeItem>;

export const Primary: Story = {
  args: {
    recipeItem: {
      id: '1',
      img: '',
      title: 'トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン',
      chef: 'ウルトラハイパー超すごいしまぶーシェフ',
      like: 1234,
    },
  },
};
