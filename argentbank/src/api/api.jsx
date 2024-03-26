export const loginUser = async (username,password) => {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email: username,password}),
    });

    const data = await response.json();
    if (data.status !== 200) {
        return {
            error: {
                message: data.message,
            },
        };
    }

    return {
        token: data.body.token,
    };
};

export const getUser = async () => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
            Authorization:`Bearer ${token}`
        },
    });

    const data = await response.json();
    if (!data.body) {
        return null;
    }
    return data.body;
};

export const updateProfile = async (firstName, lastName) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization:`Bearer ${token}`
        },
        body: JSON.stringify({firstName, lastName})
    });

    const updateProfileData = await response.json()
    return updateProfileData;
};