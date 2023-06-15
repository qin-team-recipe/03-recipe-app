import type { Meta, StoryObj } from '@storybook/react';

import { IngredientsItem } from './index';

const meta: Meta<typeof IngredientsItem> = {
  title: 'Recipe/IngredientsItem',
  component: IngredientsItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IngredientsItem>;

export const Primary: Story = {
  args: {
    text: 'テキスト',
    annotation: '注釈',
    isLast: true,
  },
};
