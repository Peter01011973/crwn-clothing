const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageURL: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jeckets',
            imageURL: 'https://i.ibb.co/px2tCc3/jeckets.png',
            id: 2,
            linkUrl: '/shop/jeckets'
        },
        {
            title: 'sneakers',
            imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageURL: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageURL: 'https://i.ibb.co/R70vBrQ/mens.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        default: return state;
    }
}

export default directoryReducer;