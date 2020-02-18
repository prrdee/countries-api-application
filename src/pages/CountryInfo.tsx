import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllCountries } from '../redux/actions'
import { AppState } from '../types'

export const CountryInfo = () => {
  const { name } = useParams()

  const countries = useSelector((state: AppState) => state.countries.items)

  const dispatch = useDispatch()

  if (!countries.length) {
    dispatch(fetchAllCountries())
    return <p>Loading...</p>
  }

  const country: any = countries.find(country => country.name === name)

  return (
    <div>
      <p>{country.name}</p>
      <p>{country.region}</p>
    </div>
  )
}

export default CountryInfo
