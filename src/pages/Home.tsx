import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchAllCountries } from '../redux/actions'
import Search from '../components/Search'
import TableHeader from '../components/TableHeader'
import Table from '../components/Table'
import Cart from '../components/Cart'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  return (
    <>
      <div>
        <Search />
        <Cart />
        <table>
          <TableHeader />
          <Table />
        </table>
      </div>
    </>
  )
}
