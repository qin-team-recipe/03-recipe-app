import type { Meta, StoryObj } from '@storybook/react';

import { EditMenu } from './edit-menu';

const meta: Meta<typeof EditMenu> = {
  title: 'Recipe/EditMenu',
  component: EditMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditMenu>;

export const Primary: Story = {};
