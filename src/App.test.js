import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio hero and navigation", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /Rajeevni Umapathisivam/i })).toBeInTheDocument();
  expect(screen.getAllByText(/Full Stack Developer/i).length).toBeGreaterThan(0);
  expect(screen.getByRole("link", { name: /Skip to main content/i })).toBeInTheDocument();
});
