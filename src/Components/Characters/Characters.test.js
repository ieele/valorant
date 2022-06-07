import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Characters from "./Characters";

it("Renders heading with text: Characters", () => {
  render(<Characters />);
  const headingElement = screen.getByText(/characters/i);
  expect(headingElement).toBeInTheDocument();
});
