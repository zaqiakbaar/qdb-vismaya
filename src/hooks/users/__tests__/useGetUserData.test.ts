import { renderHook, waitFor } from "@testing-library/react";
import { fetchers } from "../../../api/fetchers/fetchers";
import { useGetUserDetails } from "../useGetUserData";
import { mockUser } from "../mocks/user.mocks";

jest.mock("../../../api/fetchers/fetchers");

describe("useGetUserDetails Hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("fetches and sets user details", async () => {
    (fetchers as jest.Mock).mockResolvedValue(mockUser);

    const { result } = renderHook(() => useGetUserDetails());

    await waitFor(() => expect(result.current.userDetails).toEqual(mockUser));
  });

  test("handles API failure gracefully", async () => {
    (fetchers as jest.Mock).mockRejectedValue(undefined);

    const { result } = renderHook(() => useGetUserDetails());

    await waitFor(() => expect(result.current.userDetails).toBeUndefined());

    expect(fetchers).toHaveBeenCalledTimes(1);
  });
});
