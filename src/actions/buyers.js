import shop from '../api/shop';

const receiveBuyers = buyers => ({
    type: 'RECEIVE_BUYERS',
    buyers: buyers
})

export const getAllBuyers = () => dispatch => {
    shop.getBuyers()
        .then(receiveBuyers)
        .then(dispatch);
}