import {
  CountriesState,
  CountriesActions,
  GET_ALL_COUNTRIES,
} from '../../types'

export default function product(
  state: CountriesState = { data: [] },
  action: CountriesActions
): CountriesState {
  switch (action.type) {
  case GET_ALL_COUNTRIES: {
    const { countries } = action.payload
    // Always return new state (e.g, new object) if changed
    return { ...state, data: countries }
  }

  default:
    return state
  }
}
