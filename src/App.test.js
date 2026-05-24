import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders professional hero section", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /Rajeevni Umapathisivam/i })).toBeInTheDocument();
  expect(screen.getByRole("list", { name: /Core technologies/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /View my work/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Download CV/i })).toBeInTheDocument();
});
