import { getCatsAPI } from "../../Api/getCatsAPI"
import { getAllCats } from "../actions"

export const getCatPng = (id , limit) => {
    return (dispatch, getState) => {
        return getCatsAPI(id , limit).then((data)=> {
            dispatch(getAllCats(data))
        })
    }
}