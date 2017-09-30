/**
 * Mocking client-server processing
 */

const TIMEOUT = 100;

export default {
    getPencils: () => {
        return fetch('api/pencils')
            .then(res => res.json());
    },

    getUsers: () => {
        return fetch('api/buyers')
            .then(res => res.json())
    }
    /*
    addPencil: (name) => {
        return new Promise((resolve, reject) => setTimeout(() => {
            let pencil = {id: _pencils.length + 1, name};
            resolve(pencil);
        }, TIMEOUT))
    }
    */
}
