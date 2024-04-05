export const LOGIN_SUCCEED = 'LOGIN_SUCCEED';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';
export const SET_PROFILE = 'SET_PROFILE';
export const EDIT_USERNAME = 'EDIT_USERNAME';


// action pour gérer le succès de la connection utilisateur 

export const loginSuccess = (userData) => ({
    type: LOGIN_SUCCEED,
    payload: userData,
});

// action pour gérer la fail de la connection utilisateur

export const loginError = (error) => ({
    type: LOGIN_ERROR,
    payload: error,
});

// action pour gérer la déconnection utilisateur

export const logout = () => {
    sessionStorage.removeItem('token');
    return {
        type: LOGOUT,
    };
};

export const setProfile = (userData) => ({
    type: SET_PROFILE,
    payload: userData,
});

// action pour gérer la connection utilisateur
export const loginUser = (email, password) => {
    return async (dispatch) => {
        try {
            const userData = {email, password};
            const token = sessionStorage.getItem('token');
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();
            if (response.status === 200) {
                sessionStorage.setItem('token', token);
                dispatch(loginSuccess(userData));
                dispatch(fetchUser());
            } else if (response.status === 400  || response.status === 401 ) {
                sessionStorage.removeItem('token');
                dispatch(loginError('Email et mot de passe incorrect.'))
            };
        } catch(error) {
            dispatch(loginError('Email et mot de passe incorrect.'))
        }
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
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                const userProfile = data.body;
                dispatch(setProfile(userProfile));
                dispatch({type: LOGIN_SUCCEED, payload: userProfile});
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

            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({username}),
            });

            if(response.status === 200) {
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