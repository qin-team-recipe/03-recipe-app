import type { Meta, StoryObj } from '@storybook/react';

import { CopyButton } from './index';

const meta: Meta<typeof CopyButton> = {
  title: 'Recipe/CopyButton',
  component: CopyButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Primary: Story = {
  args: {
    recipeItems: [{ text: 'text1' }, { text: 'text2' }, { text: 'text3' }],
  },
};
