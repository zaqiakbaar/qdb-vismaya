import { render, screen, waitFor } from "@testing-library/react";
import { useGetUserDetails } from "../../../hooks/users/useGetUserData";
import Sidebar from '../Sidebar';
import { BrowserRouter } from "react-router-dom";

jest.mock("../../../hooks/users/useGetUserData");

describe("it should render sidebar", () => {
  test("renders user info when userDetails is available", async () => {
    (useGetUserDetails as jest.Mock).mockReturnValue({
      userDetails: { id: 1, name: "Test User" },
    });

    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    await waitFor(() => expect(screen.getByText("Test User")));
    expect(screen.getByText("Test User")).toMatchSnapshot();
  });

  test("should not render user info when userDetails is unavailable", () => {
    (useGetUserDetails as jest.Mock).mockReturnValue({
      userDetails: undefined
    });

    const renderPages = render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );


    expect(renderPages.queryByText("Test User")).toBeNull();
  });


});
