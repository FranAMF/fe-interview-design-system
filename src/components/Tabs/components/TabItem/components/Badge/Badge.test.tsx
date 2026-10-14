import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Badge from "./index";
import styles from "./Badge.module.scss";

describe("Badges", () => {
  it("neutral variant by default", () => {
    render(<Badge label="Warning" />);

    const badge = screen.getByText("Warning");

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass(styles["Badge--neutral"]);
  });

  it("supports NEGATIVE variant", () => {
    render(<Badge label="Error" variant="NEGATIVE" />);

    expect(screen.getByText("Error")).toHaveClass(styles["Badge--negative"]);
  });
});
