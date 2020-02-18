import { Dispatch } from 'redux'

import {
  GET_ALL_COUNTRIES,
  FILTER_ALL_COUNTRIES,
  ADD_COUNTRY_TO_CART,
  REMOVE_COUNTRY_FROM_CART,
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

export const addCountryToCart = (country: Country): CountriesActions => {
  return {
    type: ADD_COUNTRY_TO_CART,
    payload: {
      country,
    },
  }
}

export const removeCountryFromCart = (country: Country): CountriesActions => {
  return {
    type: REMOVE_COUNTRY_FROM_CART,
    payload: {
      country,
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
