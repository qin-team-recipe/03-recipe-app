import type { Meta, StoryObj } from '@storybook/react';

import { TabsTemplate } from './tabs';

const meta: Meta<typeof TabsTemplate> = {
  title: 'Ui/RecipeTabs',
  component: TabsTemplate,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TabsTemplate>;

export const Primary: Story = {
  args: {
    tabs: [
      { path: '/recipe/1', tabText: '作り方', isActive: true },
      { path: '/recipe/1/ingredients', tabText: '材料', isActive: false },
    ],
  },
};

export const Secondary: Story = {
  args: {
    tabs: [
      { path: '/', tabText: 'すべて', isActive: true },
      { path: '/chef', tabText: 'シェフ', isActive: false },
      { path: '/recipe', tabText: 'レシピ', isActive: false },
    ],
  },
};
