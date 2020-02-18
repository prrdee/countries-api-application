import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchAllCountries } from '../redux/actions'
import Search from '../components/Search'
import TableHeader from '../components/TableHeader'
import Table from '../components/Table'

export default function Home() {
  const dispatch = useDispatch()

  const header = ['Flag', 'Name', 'Population', 'Language', 'Region', 'Action']

  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  return (
    <>
      <div>
        <Search />
        <table>
          <TableHeader header={header} />
          <Table />
        </table>
      </div>
    </>
  )
}
