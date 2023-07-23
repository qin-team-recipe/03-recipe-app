import type { Meta, StoryObj } from '@storybook/react';

import { SnsIcons } from './sns-icons';

const meta: Meta<typeof SnsIcons> = {
  title: 'Recipe/SnsIcons',
  component: SnsIcons,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SnsIcons>;

export const Primary: Story = {
  args: {
    snsList: [
      { type: 'youtube', url: '' },
      { type: 'instagram', url: '' },
      { type: 'tiktok', url: '' },
      { type: 'twitter', url: '' },
      { type: 'facebook', url: '' },
    ],
  },
};
export const Secondary: Story = {
  args: {
    snsList: [
      { type: 'youtube', url: '' },
      { type: 'instagram', url: '' },
    ],
  },
};
