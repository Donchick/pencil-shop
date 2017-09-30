import shop from '../api/shop';

const receiveUsers = pencils => ({
    type: 'RECEIVE_USERS',
    users: users
})

export const getAllUsers = () => dispatch => {
    shop.getUsers()
        .then(receiveUsers)
        .then(dispatch);
}