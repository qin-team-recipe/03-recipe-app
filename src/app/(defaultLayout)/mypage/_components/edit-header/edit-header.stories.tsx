import type { Meta, StoryObj } from '@storybook/react';

import { EditHeader } from './edit-header';

const meta: Meta<typeof EditHeader> = {
  title: 'Mypage/EditHeader',
  component: EditHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditHeader>;

export const Primary: Story = {};
