import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Bye there123!", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Bye there123!/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Bye there123! again", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Bye there123!/i);
  expect(linkElement).toBeInTheDocument();
});
