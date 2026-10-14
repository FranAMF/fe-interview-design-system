import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import TabItem from "./index";
import styles from "./TabItem.module.scss";

describe("TabItem", () => {
  it("applies the variant and selected styles", () => {
    render(
      <TabItem
        label="Profile"
        style="PILL"
        selected={true}
        onClick={() => {}}
      />,
    );

    const tab = screen.getByRole("tab", { name: "Profile" });

    expect(tab).toHaveClass(styles["TabItem--pill"]);
    expect(tab).toHaveClass(styles.selected);
  });
});
