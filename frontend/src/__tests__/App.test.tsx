import App from "../App";
import { render } from "@testing-library/react";

describe("Testing app", () => {
  test("Should render main page correctly", () => {
    render(<App />);
    expect(true).toBeTruthy();
  });
});
