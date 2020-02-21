import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { fetchAllCountries } from '../redux/actions'
import { AppState, Country } from '../types'
import ApplicationBar from '../components/ApplicationBar'

import { Image, Heading, Main, Paragraph, Box } from 'grommet'

export const CountryInfo = () => {
  const { name } = useParams()

  const countries = useSelector((state: AppState) => state.countries.items)

  const dispatch = useDispatch()

  if (!countries.length) {
    dispatch(fetchAllCountries())
    return <p>Loading...</p>
  }

  const country: Country | any = countries.find(
    country => country.name === name
  )

  return (
    <>
      <ApplicationBar />
      <Main pad="large">
        <Box height="small" width="small">
          <Image fit="contain" src={country.flag} alt={country.name} />
        </Box>
        <Heading>{country.name}</Heading>
        <Paragraph>
          has a population of {country.population} people and is in{' '}
          {country.region}.
        </Paragraph>
      </Main>
    </>
  )
}

export default CountryInfo
