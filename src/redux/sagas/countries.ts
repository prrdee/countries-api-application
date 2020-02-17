import { takeLatest } from 'redux-saga/effects'

import { GET_ALL_COUNTRIES, GetAllCountriesAction } from '../../types'

function* doSomethingWhenFetchingCountries(action: GetAllCountriesAction) {
  yield console.log(action)
}

export default [takeLatest(GET_ALL_COUNTRIES, doSomethingWhenFetchingCountries)]
