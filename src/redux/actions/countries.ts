import { Dispatch } from 'redux'

import {
  GET_ALL_COUNTRIES,
  FILTER_ALL_COUNTRIES,
  CountriesActions,
  Country,
} from '../../types'

export const getAllCountries = (countries: Country[]): CountriesActions => {
  return {
    type: GET_ALL_COUNTRIES,
    payload: {
      countries,
    },
  }
}

export const filterAllCountries = (searchText: string): CountriesActions => {
  return {
    type: FILTER_ALL_COUNTRIES,
    payload: {
      searchText,
    },
  }
}

// Async action processed by redux-thunk middleware
//get all the countries
export function fetchAllCountries() {
  return (dispatch: Dispatch) => {
    return fetch('https://restcountries.eu/rest/v2/all')
      .then(resp => resp.json())
      .then(countries => {
        dispatch(getAllCountries(countries))
      })
  }
}
