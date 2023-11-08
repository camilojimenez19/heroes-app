import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchPage from "../../../src/heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Priuebas en <SearchPage />", () => {
  beforeEach(() => jest.clearAllMocks());
  test("Debe de mostrarse correctamente con valores por defecto", () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar a Batman y el input con el valor del queryString", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("batman");

    const image = screen.getByRole("img");
    expect(image.src).toContain("batman");
  });

  test("debe de mostrar un error si no se encuentra el hero (batman123)", () => {
    render(
      <MemoryRouter initialEntries={["/search?q=batman123"]}>
        <SearchPage />
      </MemoryRouter>
    );
    const alertElement = screen.getByLabelText("alert-danger");
    expect(alertElement).toBeTruthy();
  });

  test("debe de llamar el navigate a la pantalla nueva", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>
    );

    const input = screen.getByLabelText("input-search");
    fireEvent.change(input, { target: { value: "batman" } });

    const form = screen.getByTestId("form-search");
    fireEvent.submit(form);
    expect(mockedUseNavigate).toHaveBeenCalledWith("?q=batman");
  });
});
