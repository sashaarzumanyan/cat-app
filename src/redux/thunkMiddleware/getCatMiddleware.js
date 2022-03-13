import { getCategory } from "../../Api/getCategory"
import {getCategoryAction} from '../actions'

export const getCatMiddleware = () => {
    return (dispatch, getState) => {
        return getCategory().then((name) => {
            dispatch(getCategoryAction(name))
        })
    }
}