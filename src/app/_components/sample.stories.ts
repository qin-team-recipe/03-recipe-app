import type { Meta, StoryObj } from '@storybook/react';

import { Sample } from './sample';

const meta: Meta<typeof Sample> = {
  title: 'Example/Sample',
  component: Sample,
};

export default meta;
type Story = StoryObj<typeof Sample>;

export const Primary: Story = {
  args: {
    text: 'sample',
  },
};
