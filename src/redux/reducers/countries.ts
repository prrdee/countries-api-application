import {
  CountriesState,
  CountriesActions,
  GET_ALL_COUNTRIES,
  FILTER_ALL_COUNTRIES,
} from '../../types'

export default function countries(
  state: CountriesState = { items: [], filteredItems: [] },
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
      filteredItems: state.items.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      ),
    }
  }

  default:
    return state
  }
}
