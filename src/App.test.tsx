import React from "react";

import { describe, it, expect, beforeEach, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";

import App from "./App";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

// The Following tests are run on the default render that comes with the installation
// You should delete them when you start writing your own test cases
describe("App", () => {
  it("renders vite+react", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  it("count button increments", async() => {
    const user = userEvent.setup();
    render(<App/>);
    const button = screen.getByRole("button");
    await user.click(button);
    expect(button.textContent).toBe('count is 1');
    await user.click(button);
    expect(button.textContent).toBe('count is 2');
  });
});
// default tests end