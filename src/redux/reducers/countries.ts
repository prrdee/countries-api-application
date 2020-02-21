import {
  CountriesState,
  CountriesActions,
  GET_ALL_COUNTRIES,
  FILTER_ALL_COUNTRIES,
  SORT_COUNTRIES,
  ADD_COUNTRY_TO_CART,
  REMOVE_COUNTRY_FROM_CART,
} from '../../types'

let _ = require('lodash')

export default function countries(
  state: CountriesState = { items: [], filteredItems: [], inCartItems: [] },
  action: CountriesActions
): CountriesState {
  switch (action.type) {
  case GET_ALL_COUNTRIES: {
    const { countries } = action.payload
    // Always return new state (e.g, new object) if changed
    return { ...state, items: countries, filteredItems: countries }
  }
  case FILTER_ALL_COUNTRIES: {
    const { searchText } = action.payload

    return {
      ...state,
      filteredItems: state.items.filter(
        item =>
          item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.nativeName.toLowerCase().includes(searchText.toLowerCase())
      ),
    }
  }
  case SORT_COUNTRIES: {
    const { header } = action.payload

    return {
      ...state,
      filteredItems: header.isSorted
        ? _.sortBy(state.filteredItems, header.name.toLowerCase())
        : _.sortBy(state.filteredItems, header.name.toLowerCase()).reverse(),
    }
  }
  case ADD_COUNTRY_TO_CART: {
    const { country } = action.payload
    if (state.inCartItems.find(p => p.name === country.name)) {
      return state
    }
    // Always return new state (e.g, new object) if changed
    return { ...state, inCartItems: [...state.inCartItems, country] }
  }

  case REMOVE_COUNTRY_FROM_CART: {
    const { country } = action.payload
    const index = state.inCartItems.findIndex(p => p.name === country.name)
    if (index >= 0) {
      state.inCartItems.splice(index, 1)
      return { ...state, inCartItems: [...state.inCartItems] }
    }
    return state
  }

  default:
    return state
  }
}
