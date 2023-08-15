import { Meta, StoryObj } from '@storybook/react';

import { SearchBox } from '@/app/search/_components/search-box/search-box';

const meta: Meta<typeof SearchBox> = {
  title: 'Search/SearchBox',
  component: SearchBox,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SearchBox>;

export const Primary: Story = {
  args: {
    q: '',
  },
};

export const Secondary: Story = {
  args: {
    q: 'グラタン',
  },
};
