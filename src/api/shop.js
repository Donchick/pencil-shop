export default {
    getPencils: () => {
        return fetch('/api/pencils')
            .then(res => res.json());
    },

    getBuyers: () => {
        return fetch('/api/buyers')
            .then(res => res.json())
    },

    getPencil: (id) => {
        return fetch(`/api/pencils/${id}`)
            .then(res => res.json());
    },

    addPencil: (pencil) => {
        return fetch('/api/pencils', {
            method: 'post',
            body: JSON.stringify(pencil),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    },
    
    updatePencil: (pencil) => {
        return fetch('/api/pencils', {
            method: 'PATCH',
            body: JSON.stringify(pencil),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    },
    
    deletePencil: (id) => {
        return fetch(`/api/pencils/${id}`, {
            method: 'DELETE'
        }).then(res => res.json());
    }
}
