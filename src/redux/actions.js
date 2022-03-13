
export const getCategoryAction = (category) => {
  return {
    type: "GET_CATEGORY",
    payload: category
  }
}

export const getAllCats = (data) => {
  return {
    type : "GET_ALL_CATS",
    payload : data
  }
}