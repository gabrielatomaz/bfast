import api from '../../services/api'

export const fetchItems = () => dispatch => {
    const mock = [
        {
            title: 'teste',
            data: '17/01/2000',
            key: 1,
        },
        {
            title: 'teste',
            data: '17/01/2000', 
            key: 2,
        },
        {
            title: 'teste',
            data: '17/01/2000', 
            key: 3,
        },
        {
            title: 'teste',
            data: '17/01/2000',
            key: 4, 
        },
    ]

    const type = 'LIST_ITEMS'
    // api.get('/items').then(response => {
    return dispatch({
        type,
        payload: mock
    })
    // }).catch(error => {
    //     return dispatch({
    //         type,
    //         payload: null
    //     })
    // })
}