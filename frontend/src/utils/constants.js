export const routes = {
    SIGNIN: '/sign-in',
    SIGNUP: '/sign-up',
    EDIT: '/edit/:id',
    ABOUT: '/about/:id',
};

export const createRoute = {
    EDIT: id =>`/edit/${id}`,
    ABOUT: id =>`/about/${id}`,
};