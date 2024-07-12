import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./app";
import { useNoteData } from "./hooks/useNoteData";
import { useNoteDataMutate } from "./hooks/useNoteDataMutate";

jest.mock("./hooks/useNoteData");
jest.mock("./hooks/useNoteDataMutate");

describe("App Component Tests", () => {
  beforeEach(() => {
    useNoteData.mockImplementation(() => ({
      data: [{ id: 1, text: "Note Test" }],
    }));
    useNoteDataMutate.mockImplementation(() => ({
      mutate: jest.fn(),
    }));
  });

  test("renders notes data", () => {
    render(<App />);
    expect(screen.getByText("Note Test")).toBeInTheDocument();
  });

  test("handles new note submission", () => {
    render(<App />);
    const textarea = screen.getByPlaceholderText("Add a new note here");
    const saveButton = screen.getByText("Save");

    fireEvent.change(textarea, { target: { value: "New note" } });
    fireEvent.click(saveButton);

    expect(useNoteDataMutate().mutate).toHaveBeenCalledWith({
      text: "New note",
    });
    expect(textarea.value).toBe("");
  });
});
