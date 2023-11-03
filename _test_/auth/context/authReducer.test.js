import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types";

describe('Tests en auth reducer', () => {


    test('Debe retortner el estado por defecto', () => {

        const state = authReducer({ logged: false }, {})
        expect(state).toEqual({ logged: false })
    });

    test('Debe de (login) llamar el login autenticar y establecer el usuario', () => {

        const action = {
            type: types.login,
            payload: {
                id: '123',
                name: 'Camilo'
            }
        }

        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })
    })

    test('Debe de (logout) borrar el name del usuario y logged en false', () => {

        const state = {
            logged: true,
            user: { id: '123', name: 'Camilo' }
        }

        const action = { type: types.logout }
        const newState = authReducer(state, action)
        expect(newState).toEqual({logged: false})
    })
})