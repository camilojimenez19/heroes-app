const { render, screen } = require("@testing-library/react");
const { PublicRoutes } = require("../../src/router/PublicRoutes");
const { AuthContext } = require("../../src/auth");
const { MemoryRouter, Routes, Route } = require("react-router-dom");

describe("Pruebas en <PublicRoutes />", () => {
  test("Debe de mostrar el children si no esta autenticado", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoutes>
          <h1>Ruta Publica</h1>
        </PublicRoutes>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Ruta Publica")).toBeTruthy();
  });

  test("Debe de navegar si esta autenticado", () => {
    const contextValue = {
      logged: true,
      user: {
        name: "Camilo",
        id: "1234",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/login"]}>
          <Routes>
            <Route path="login" element={
              <PublicRoutes>
                <h1>Ruta Publica</h1>
              </PublicRoutes>
            } />
            <Route path="marvel" element={ <h1>Pagina Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Pagina Marvel")).toBeTruthy();
  });
});
