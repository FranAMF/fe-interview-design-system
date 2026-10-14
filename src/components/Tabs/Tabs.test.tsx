import "@testing-library/jest-dom/vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Tabs from "./index";

describe("Tabs", () => {
  it("renders the default selected tab", () => {
    render(
      <Tabs
        variant="PILL"
        defaultActiveKey="profile"
        items={[
          {
            key: "profile",
            label: "Profile",
            children: "Profile content",
          },
          {
            key: "settings",
            label: "Settings",
            children: "Settings content",
          },
        ]}
      />,
    );
    expect(screen.getByRole("tab", { name: "Profile" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Settings" })).toBeInTheDocument();

    expect(screen.getByText("Profile content")).toBeInTheDocument();
    expect(screen.queryByText("Settings content")).not.toBeInTheDocument();
  });

  it("changes the selected tab when clicked", async () => {
    const user = userEvent.setup();

    render(
      <Tabs
        variant="UNDERLINE"
        defaultActiveKey="profile"
        items={[
          {
            key: "profile",
            label: "Profile",
            children: "Profile content",
          },
          {
            key: "settings",
            label: "Settings",
            children: "Settings content",
          },
        ]}
      />,
    );
    expect(screen.getByText("Profile content")).toBeInTheDocument();
    expect(screen.queryByText("Settings content")).not.toBeInTheDocument();

    await user.click(screen.getByRole("tab", { name: "Settings" }));

    expect(screen.getByText("Settings content")).toBeInTheDocument();
    expect(screen.queryByText("Profile content")).not.toBeInTheDocument();
  });

  it("renders badges correctly and allows switching tabs", async () => {
    const user = userEvent.setup();

    render(
      <Tabs
        variant="PILL"
        defaultActiveKey="profile"
        items={[
          {
            key: "profile",
            label: "Profile",
            children: "Profile content",
            badge: {
              label: "Warning",
              variant: "NEGATIVE",
            },
          },
          {
            key: "settings",
            label: "Settings",
            children: "Settings content",
          },
        ]}
      />,
    );
    const profileTab = screen.getByRole("tab", { name: /Profile/ });
    const settingsTab = screen.getByRole("tab", { name: "Settings" });

    expect(within(profileTab).getByTestId("badge")).toHaveTextContent(
      "Warning",
    );
    expect(within(settingsTab).queryByTestId("badge")).not.toBeInTheDocument();

    await user.click(settingsTab);

    expect(screen.getByText("Settings content")).toBeInTheDocument();
    expect(screen.queryByText("Profile content")).not.toBeInTheDocument();
  });
});
