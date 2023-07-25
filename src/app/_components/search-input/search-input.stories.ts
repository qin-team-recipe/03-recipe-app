import { Meta, StoryObj } from '@storybook/react';

import { SearchInput } from './';

const meta: Meta<typeof SearchInput> = {
  title: 'Search/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Primary: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
