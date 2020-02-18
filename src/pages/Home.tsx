import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../types'
import { filterAllCountries, fetchAllCountries } from '../redux/actions'
import Search from '../components/Search'
import TableHeader from '../components/TableHeader'
import Table from '../components/Table'

export default function Home() {
  const dispatch = useDispatch()
  const { filteredItems } = useSelector((state: AppState) => state.countries)

  const header = ['Flag', 'Name', 'Population', 'Language', 'Region', 'Action']

  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(filterAllCountries(event.target.value))

  return (
    <>
      <div>
        <Search handleSearchTextChange={handleSearchTextChange} />
        <table>
          <TableHeader header={header} />
          <Table countries={filteredItems} />
        </table>
      </div>
    </>
  )
}
