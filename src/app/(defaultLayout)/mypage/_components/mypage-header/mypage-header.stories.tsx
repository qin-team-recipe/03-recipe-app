import type { Meta, StoryObj } from '@storybook/react';

import { MypageHeader } from './mypage-header';

const meta: Meta<typeof MypageHeader> = {
  title: 'Mypage/MypageHeader',
  component: MypageHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MypageHeader>;

export const Primary: Story = {};
