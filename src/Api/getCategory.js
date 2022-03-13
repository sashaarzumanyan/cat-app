import  axios  from "axios"

export const getCategory = async () =>{
    const res =  await axios.get(`https://api.thecatapi.com/v1/categories`)
    return res.data
}