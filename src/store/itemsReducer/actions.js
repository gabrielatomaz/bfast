import api from '../../services/api'

export const fetchItems = () => dispatch => {
    const mock = [
        {
            title: 'teste',
            date: '25 Sep, 2020',
            daysWithMe: '22',
            key: 1,
        },
        {
            title: 'teste',
            date: '25 Sep, 2020',
            daysWithMe: '22',
            key: 2,
        },
        {
            title: 'teste',
            date: '25 Sep, 2020', 
            daysWithMe: '22',
            key: 3,
        },
        {
            title: 'teste',
            date: '25 Sep, 2020',
            daysWithMe: '22',
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