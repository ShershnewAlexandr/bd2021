export const routes = {
    SIGNIN: '/sign-in',
    SIGNUP: '/sign-up',
    ADMIN: '/admin/:id',
    USER: '/user/:id',
};

export const createRoute = {
    ADMIN: id =>`/admin/${id}`,
    USER: id =>`/user/${id}`,
};