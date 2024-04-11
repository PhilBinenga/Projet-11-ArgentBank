export const SET_PROFILE = 'SET_PROFILE';
export const EDIT_USERNAME = 'EDIT_USERNAME';
export const LOGOUT = 'LOGOUT';


export const setProfile = (userData) => {
    return {
    type: SET_PROFILE,
    payload: userData,
    };
};

export const editUser = (username) => {
    return {
    type: EDIT_USERNAME,
    payload: username,
    };
};

export const logout = () => {
    return {
        type: LOGOUT,
    };
};


// action pour avoir le profil utilisateur 

export const fetchUser = () => {
    return async (dispatch) => {
        try {
            const token =  sessionStorage.getItem('token');
            if (!token) {
                return;
            }
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
               const userData = await response.json()
                dispatch(setProfile(userData));
 
            } else {
               dispatch(loginError('Erreur lors de la récupération du profil utilisateur'));
            }
        } catch (error) {
            dispatch(loginError('Erreur lors de la récupération du profil utilisateur.'))
        }
    };
};
// action pour gérer la modif utilisateur
export const userEdit = (username) => { 
    return async (dispatch) => {
        try {
            const token = sessionStorage.getItem('token');
            if(!token) {
                return;
            }

            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({username}),
            });

            if(response.ok) {
                dispatch({
                    type: EDIT_USERNAME,
                    payload: username,
                });
            } else {
                throw new Error('Echec de la modification utilisateur');
            }
        } catch(error) {
            console.error(error);
            dispatch({type:LOGIN_ERROR, payload: error.message });
        }
    };
};