import {
    RECEIVE_DATA
} from '../actions/shared'

export default function loading (state = true, action) {
    switch(action.type) {
        case RECEIVE_DATA :
            console.log('entrei')
            return false
        default :
            return state
    }
}