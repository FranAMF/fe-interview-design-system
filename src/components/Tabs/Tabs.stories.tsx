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
    defaultActiveKey: "profile",
    variant: "UNDERLINE",
    items: [
      {
        key: "profile",
        label: "Profile",
        children: <div>Profile children</div>,
        badge: {
          label: "Warning",
          variant: "NEGATIVE",
        },
      },
      {
        key: "label",
        label: "Label",
        children: <div>Label children</div>,
      },
      {
        key: "user",
        label: "User",
        children: <div>User children</div>,
      },
    ],
  },
};
