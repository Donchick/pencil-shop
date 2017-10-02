import shop from '../api/shop';
import { BUYERS_RECEIVED } from '../constants/actions';

const receiveBuyers = buyers => ({
    type: BUYERS_RECEIVED,
    buyers: buyers
})

export const getAllBuyers = () => dispatch => {
    shop.getBuyers()
        .then(receiveBuyers)
        .then(dispatch);
}