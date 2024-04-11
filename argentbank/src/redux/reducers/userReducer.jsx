import { SET_PROFILE, EDIT_USERNAME,LOGOUT } from "../actions/userActions.jsx";

const initialState = {
    status: 'null',
    userData: {},
};

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PROFILE:
            return {
                ...state,
                status: 'SUCCEED',
                userData: action.payload,
            };
            case EDIT_USERNAME:
                return {
                    ...state,
                    status:'MODIFIED',
                    userData: {
                        ...state.userData,
                        username: action.payload,
                    },
                };
                case LOGOUT: {
                    return initialState;
                }
                default:
                    return state;
    }
};
export default userReducer;