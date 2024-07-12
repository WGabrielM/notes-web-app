import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header Component", () => {
  test("must render header the support area in header", () => {
    render(<Header />);

    expect(screen.getByText("Account Overview")).toBeInTheDocument();

    expect(screen.getByText("your feefo support contact")).toBeInTheDocument();
  });
});
