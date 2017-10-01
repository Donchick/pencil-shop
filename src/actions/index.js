import shop from '../api/shop';

const receivePencils = pencils => ({
    type: 'RECEIVE_PENCILS',
    pencils: pencils
})

const receivePencil = pencil => ({
    type: 'RECEIVE_PENCIL',
    pencil: pencil
})

const pencilDeleted = pencil => ({
    type: 'PENCIL_DELETED',
    pencil: pencil
})


export const getAllPencils = () => dispatch => {
    shop.getPencils()
        .then(receivePencils)
        .then(dispatch);
}

export const getPencil = (id) => dispatch => {
    shop.getPencil(id)
        .then(receivePencil)
        .then(dispatch)
}

export const addPencil = (pencil) => dispatch => {
    return shop.addPencil(pencil)
        .then(receivePencil)
        .then(dispatch);
}

export const updatePencil = (pencil) => dispatch => {
    return shop.updatePencil(pencil)
        .then(receivePencil)
        .then(dispatch);
}

export const deletePencil = (pencil) => dispatch => {
    return shop.deletePencil(pencil)
        .then(pencilDeleted)
        .then(dispatch);
}