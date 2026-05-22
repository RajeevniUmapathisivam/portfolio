import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders purple theme portfolio", () => {
  render(<App />);
  expect(screen.getByText(/Hello, I'm/i)).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /Full Stack Developer/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Download CV/i })).toBeInTheDocument();
});
