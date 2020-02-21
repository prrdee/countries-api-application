import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchAllCountries } from '../redux/actions'
import { AppState } from '../types'

import Table from '../components/Table'
import ApplicationBar from '../components/ApplicationBar'

export default function Home() {
  const items = useSelector((state: AppState) => state.countries.items)
  const dispatch = useDispatch()

  if (items.length === 0) {
    dispatch(fetchAllCountries())
    return <p>Loading ...</p>
  }

  return (
    <>
      <ApplicationBar />
      <Table />
    </>
  )
}
