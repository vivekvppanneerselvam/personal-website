//import serverCall from '../../utils/serverCall'
import axios from 'axios'


export const submitQuery = (payload) => {
    return dispatch => {
        dispatch({ type: 'SUBMIT_FAQ_LOADING', loading: true, error: false })
        return axios.get('https://chennaifarmfreshapi.herokuapp.com/postfaq', payload).then(res => {
            return dispatch({ type: 'SUBMIT_FAQ', loading: false, data: res.data.order, error: false })
        }).catch(err => {
            dispatch({ type: 'SUBMIT_FAQ_ERROR', loading: false, data: err, error: true })
        })
    }
}
