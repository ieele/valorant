import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RenderedCharacter from "./RenderCharacters";
import { BrowserRouter } from "react-router-dom";

const MockRender = () => {
  const array = [
    { uuid: 1, displayName: "rex" },
    { uuid: 2, displayName: "paul" },
  ];

  return (
    <BrowserRouter>
      <RenderedCharacter agents={array} />
    </BrowserRouter>
  );
};

it("renders the correct amount of links", () => {
  render(<MockRender />);
  const headingElement = screen.getAllByTitle("rendered characters");
  expect(headingElement.length).toBe(2);
});
