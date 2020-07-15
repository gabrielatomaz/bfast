import api from '../../services/api'

export const fetchItems = () => dispatch => {
    const mock = [
        {
            title: 'teste',
            data: '17/01/2000' 
        },
        {
            title: 'teste',
            data: '17/01/2000' 
        },
        {
            title: 'teste',
            data: '17/01/2000' 
        },
        {
            title: 'teste',
            data: '17/01/2000' 
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