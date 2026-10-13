import type { Meta, StoryObj } from "@storybook/react-vite";
import { Title, Description, Stories } from "@storybook/addon-docs/blocks";
import Tabs from "./index";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Stories />
        </>
      ),
    },
  },
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
        badge: {
          label: "No mandatory variant",
        },
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
export const DefaultPill: Story = {
  args: {
    defaultActiveKey: "profile",
    variant: "PILL",
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
        badge: {
          label: "No mandatory variant",
        },
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

export const WithOverflow: Story = {
  args: {
    variant: "PILL",
    defaultActiveKey: "profile",
    items: [
      { key: "profile", label: "Profile", children: "Profile content" },
      { key: "settings", label: "Settings", children: "Settings content" },
      {
        key: "notifications",
        label: "Notifications",
        children: "Notifications content",
      },
      { key: "security", label: "Security", children: "Security content" },
      { key: "billing", label: "Billing", children: "Billing content" },
      {
        key: "subscriptions",
        label: "Subscriptions",
        children: "Subscriptions content",
      },
      { key: "privacy", label: "Privacy", children: "Privacy content" },
      {
        key: "integrations",
        label: "Integrations",
        children: "Integrations content",
      },
      { key: "analytics", label: "Analytics", children: "Analytics content" },
      {
        key: "permissions",
        label: "Permissions",
        children: "Permissions content",
      },
      {
        key: "localization",
        label: "Language",
        children: <div>Localization content</div>,
      },
      {
        key: "accessibility",
        label: "Accessibility",
        children: <div>Accessibility Settings content</div>,
      },
      {
        key: "backups",
        label: "Backup",
        children: <div>Backup and Recovery content</div>,
      },
      {
        key: "support",
        label: "Help",
        children: <div>Help and Support content</div>,
      },
      {
        key: "api",
        label: "Configuration",
        children: <div>API Configuration content</div>,
      },
      {
        key: "webhooks",
        label: "Webhooks",
        children: <div>Webhooks content</div>,
      },
    ],
  },
};
