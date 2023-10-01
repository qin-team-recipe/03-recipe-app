import type { Meta, StoryObj } from '@storybook/react';

import { SubText } from './sub-text';

const meta: Meta<typeof SubText> = {
  title: 'Recipe/SubText',
  component: SubText,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SubText>;

export const Primary: Story = {
  args: {
    label: 'label',
    value: 'value',
  },
};
