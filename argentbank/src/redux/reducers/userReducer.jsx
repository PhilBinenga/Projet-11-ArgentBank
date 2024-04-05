import { LOGIN_SUCCEED, LOGIN_ERROR, LOGOUT, SET_PROFILE, EDIT_USERNAME} from "../actions/userActions.jsx";

//
const initialState = {
    userProfile: {},
    error: null,
    
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCEED: 
        return {
            ...state, 
            error: null,
        };
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case LOGOUT:
            return {
                ...initialState,
            };
        case SET_PROFILE:
            return {
                ...state,
            userProfile: action.payload,
            };
        case EDIT_USERNAME:
            return {
                ...state, userProfile: {
                    ...state.userProfile,
                    username: action.payload
                },
            };
            default:
                return state;
    }
};

export default userReducer;