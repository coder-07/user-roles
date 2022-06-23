export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return action.usersList;
        case 'CHANGE_ROLE':
            return action.updatedUsersList;
        default:
            return state;
    }
}