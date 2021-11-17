import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Given a Home page", () => {
  describe("When it's rendered", () => {
    test("Then it should render a heading", () => {

      render(<Home />)
      const heading = screen.getByRole("heading", {name: "Welcome to Tuitah"});
      expect(heading).toBeInTheDocument();
    })
  })
})