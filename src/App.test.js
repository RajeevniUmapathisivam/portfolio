import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders professional hero section", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /Rajeevni Umapathisivam/i })).toBeInTheDocument();
  expect(screen.getByRole("list", { name: /Core technologies/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /View my work/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Download CV/i })).toBeInTheDocument();
});

// Verify the existing interactions still work after the redesign.
test("filters projects and exposes the selected category", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Web", exact: true }));
  expect(screen.getByRole("button", { name: "Web", exact: true })).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByRole("heading", { name: "Portfolio Website" })).toBeInTheDocument();
});

test("closes mobile navigation with Escape and restores focus", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
  expect(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");
  fireEvent.keyDown(window, { key: "Escape" });
  expect(screen.getByRole("button", { name: "Open menu" })).toHaveFocus();
  expect(document.body.style.overflow).toBe("");
});

test("validates contact fields before submitting", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Send Message" }));
  expect(screen.getByText("Please enter your name.")).toBeInTheDocument();
  expect(screen.getByText("Please enter your email.")).toBeInTheDocument();
  expect(screen.getByText("Please enter a message.")).toBeInTheDocument();
});
