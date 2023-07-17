import { Meta, StoryObj } from '@storybook/react';

import { SearchBox } from '@/app/_components/search-box/search-box';

const meta: Meta<typeof SearchBox> = {
  title: 'Search/SearchBox',
  component: SearchBox,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SearchBox>;

export const Primary: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    q: '',
  },
};

export const Secondary: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  args: {
    q: 'グラタン',
  },
};
