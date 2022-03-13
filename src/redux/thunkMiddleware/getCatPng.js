import { getCatsAPI } from "../../Api/getCatsAPI"
import { getAllCats } from "../actions"

export const getCatPng = (id) => {
    return (dispatch, getState) => {
        return getCatsAPI(id).then((data)=> {
            dispatch(getAllCats(data))
        })
    }
}