import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllCountries } from '../redux/actions'
import { AppState } from '../types'
import ApplicationBar from '../components/ApplicationBar'

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
    <>
      <ApplicationBar />
      <p>{country.name}</p>
      <p>{country.region}</p>
    </>
  )
}

export default CountryInfo
