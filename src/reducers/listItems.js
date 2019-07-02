import { GET_ITEMS } from '../actions'

const initialState = [
  { words: "sample", image_url: { shop_image1: "sample"}, pr: { pr_short: "sample" } }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return action.response
    default:
      return state
  }
}