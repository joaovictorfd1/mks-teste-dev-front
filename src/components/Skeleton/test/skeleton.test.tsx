import { render, screen } from "@testing-library/react";
import Skeleton from "../Skeleton";

describe("<Skeleton />", () => {
  it("renders correctly", () => {
    render(<Skeleton />);

    const skeletonContainer = screen.getByLabelText("loading");

    // Verify if the container of skeleton should be rendering
    expect(skeletonContainer).toBeInTheDocument();
  });
});