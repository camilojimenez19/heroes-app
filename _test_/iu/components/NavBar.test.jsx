import { fireEvent, render, screen } from "@testing-library/react";
import { NavBar } from "../../../src/ui/components/NavBar";
import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter, useNavigate } from "react-router-dom";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Pruebas en <Navbar />", () => {
  const nameMock = "Camilo";
  const valueContext = {
    logged: true,
    user: {
      name: nameMock,
      id: "12345",
    },
    logout: jest.fn(),
  };

  beforeEach(() => jest.clearAllMocks());

  test("Debe de mostrar el nombre", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={valueContext}>
          <NavBar />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    expect(screen.getByText(nameMock)).toBeTruthy();
  });

  test("Debe de llamar el logout y navigate cuando se hace el click de logout", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={valueContext}>
          <NavBar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const logoutBtn = screen.getByRole("button");
    fireEvent.click(logoutBtn);
    expect(valueContext.logout).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
