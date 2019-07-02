import {
  TOGGLE_HEADER_MENU,
  TOGGLE_NEW_ITEM_DIALOG,
  TOGGLE_ITEM_DIALOG,
  TOGGLE_WIFI,
  TOGGLE_OUTRET
} from '../actions'

const initializeState = {
  sideMenu: false,
  newItemDialog: false,
  ItemDialogId: -1,
  wifi: true,
  outret: true,
}

export default (state = initializeState, action) => {
  switch (action.type) {
    case TOGGLE_HEADER_MENU:
      state.sideMenu = !state.sideMenu
      return { ...state }
    case TOGGLE_NEW_ITEM_DIALOG:
      state.newItemDialog = !state.newItemDialog
      state.sideMenu = !state.sideMenu
      return { ...state }
    case TOGGLE_ITEM_DIALOG:
      state.ItemDialogId = state.ItemDialogId === action.id ? -1 : action.id
      return { ...state }
    case TOGGLE_WIFI:
      state.wifi = !state.wifi
      return { ...state }
    case TOGGLE_OUTRET:
      state.outret = !state.outret
      return { ...state }
    default:
      return state

  }
}
