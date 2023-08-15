import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Ui/RecipeTabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
  args: {
    tabs: [
      { path: '/recipe/1', tabText: '作り方' },
      { path: '/recipe/1/ingredients', tabText: '材料' },
    ],
  },
};

export const Secondary: Story = {
  args: {
    tabs: [
      { path: '/', tabText: 'すべて' },
      { path: '/chef', tabText: 'シェフ' },
      { path: '/recipe', tabText: 'レシピ' },
    ],
  },
};
