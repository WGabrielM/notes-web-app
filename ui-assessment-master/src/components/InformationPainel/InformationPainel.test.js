import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import InformationPainel from "./InformationPainel";

describe("InformationPainel Component", () => {
  test("renders Sales information", () => {
    render(<InformationPainel />);

    expect(screen.getByText("Sales")).toBeInTheDocument();
  });

  test("renders NotesData information", () => {
    render(<InformationPainel />);

    expect(screen.getByText("upload success")).toBeInTheDocument();
    expect(screen.getByText("lines saved")).toBeInTheDocument();
  });
});
