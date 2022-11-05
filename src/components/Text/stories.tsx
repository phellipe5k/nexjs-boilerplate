import { Meta, Story } from '@storybook/react';
import Text from '.';

export default {
  title: 'Text',
  component: Text,
  args: {
    title: 'Text'
  }
} as Meta;

export const Basic: Story = (args) => <Text {...args} />;
