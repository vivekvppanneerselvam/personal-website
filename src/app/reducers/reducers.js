import { combineReducers } from 'redux'
import ContactReducer from '../../redux/reducers/contactReducer'

export const rootReducer = combineReducers({
    ContactReducer: ContactReducer,

})