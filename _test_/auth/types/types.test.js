import { types } from "../../../src/auth/types/types"

describe('Pruebas en el archivo Types', () => {

    test('Debe de regresar estos types', () => {

        expect(types).toEqual({
            login: '[auth] login',
            logout: '[auth] logout'
        })
    })
})