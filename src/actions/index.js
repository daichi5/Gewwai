import axios from 'axios'
export const GET_ITEMS = 'GET_ITEMS'
export const TOGGLE_WIFI = 'TOGGLE_WIFI'
export const TOGGLE_OUTRET = 'TOGGLE_OUTRET'
export const TOGGLE_ITEM_DIALOG = 'TOGGLE_ITEM_DIALOG'
export const TOGGLE_HEADER_MENU = 'TOGGLE_HEADER_MENU'
export const TOGGLE_NEW_ITEM_DIALOG = 'TOGGLE_NEW_ITEM_DIALOG'
export const CHANGE_FREEWORD = 'CHANGE_FREEWORD'

const ROOT_URL = "https://api.gnavi.co.jp/RestSearchAPI/v3/"
const QUERYSTRING = "?keyid=55bb2051fabeb9f5aac7453ed127a178&hit_per_page=6"
const ERROR_MESSAGE = [
  {
    name: "ERROR",
    image_url: { shop_image1: "" },
    pr: { pr_short: "検索結果が見つかりませんでした" }
  }
]

export const getItems = value => async dispatch => {
  const wifi = value.wifi ? 1 : 0
  const outret = value.outret ? 1: 0
  try {
    const response = await axios.get(`${ROOT_URL}${QUERYSTRING}&freeword=${value.freeword}&wifi=${wifi}&outret=${outret}`)
    dispatch( { type: GET_ITEMS, response: response.data.rest  } )
  } catch (error) {
    dispatch( { type: GET_ITEMS, response: ERROR_MESSAGE  } )
  }
}

export const toggleWifi = () => ({
  type: TOGGLE_WIFI
})

export const toggleOutret = () => ({
  type: TOGGLE_OUTRET
})

export const toggleItemDialog = id => ({
  type: TOGGLE_ITEM_DIALOG, id: id
})

export const toggleHeaderMenu = () => ({
  type: TOGGLE_HEADER_MENU
})

export const toggleNewItemDialog = () => ({
  type: TOGGLE_NEW_ITEM_DIALOG
})

export const changeFreeword = value => ({
  type: CHANGE_FREEWORD, value: value
})
