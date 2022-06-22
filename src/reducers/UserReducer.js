export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return action.usersList;
        default:
            return state;
    }
}