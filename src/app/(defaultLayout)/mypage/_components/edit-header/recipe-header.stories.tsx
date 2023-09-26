import type { Meta, StoryObj } from '@storybook/react';

import { RecipeHeader } from './recipe-header';

const meta: Meta<typeof RecipeHeader> = {
  title: 'Mypage/RecipeHeader',
  component: RecipeHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RecipeHeader>;

export const Primary: Story = {};
