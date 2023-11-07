const { render, screen } = require("@testing-library/react");
const { AuthContext } = require("../../src/auth");
const { PrivateRoutes } = require("../../src/router/PrivateRoutes");
const { MemoryRouter, Routes, Route } = require("react-router-dom");

describe("Pruebas en <PrivateRoutes />", () => {
  test("Debe de mostrar el children si esta autenticado", () => {

    Storage.prototype.setItem = jest.fn()

    const contextValue = {
      logged: true,
      user: {
        name: "Camilo",
        id: "1234",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <PrivateRoutes>
            <h1>Ruta Privada</h1>
          </PrivateRoutes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta Privada")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/marvel")
  });
});
