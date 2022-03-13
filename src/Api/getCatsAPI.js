import  axios  from "axios"
 
export const getCatsAPI = async (id = 1) =>{
    const res =  await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`)
    return res.data
}