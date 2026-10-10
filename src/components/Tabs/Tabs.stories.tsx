import type { Meta, StoryObj } from "@storybook/react-vite";
import Tabs from "./index";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    items: [
      {
        key: "profile",
        label: "Profile",
        variant: "PILL",
        children: <div></div>,
      },
    ],
  },
};
