import shop from '../api/shop';

const receivePencils = pencils => ({
    type: 'RECEIVE_PENCILS',
    pencils: pencils
})

const pencilAdded = pencil => ({
    type: 'PENCIL_ADDED',
    pencil: pencil
})


export const getAllPencils = () => dispatch => {
    shop.getPencils()
        .then(receivePencils)
        .then(dispatch);
}

export const addPencil = (pencil) => {
    return dispatch => {
        shop.addPencil(pencil)
            .then(pencilAdded)
            .then(dispatch);
    }
}