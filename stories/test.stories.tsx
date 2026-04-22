import type { Meta, StoryObj } from '@storybook/react';
import { TestBlock } from '../components/test';

// Wrapper to render Puck component
const TestBlockWrapper = ({ text }: { text: string }) => {
  const Component = TestBlock.render as any;
  return <Component text={text} />;
};

const meta = {
  title: 'Components/TestBlock',
  component: TestBlockWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'The text to display in the component',
    },
  },
} satisfies Meta<typeof TestBlockWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Hello from submodule rev 2`!',
  },
};

export const CustomText: Story = {
  args: {
    text: 'Custom text example',
  },
};

export const LongText: Story = {
  args: {
    text: 'This is a longer text to show how the component handles more content. The component should adapt gracefully to different text lengths.',
  },
};
