import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { fetchAllCountries } from '../redux/actions'
import Search from '../components/Search'
import TableHeader from '../components/TableHeader'
import Table from '../components/Table'
import Cart from '../components/Cart'

import { Grommet } from 'grommet'

const theme = {
  global: {
    colors: {
      'light-2': '#f5f5f5',
      text: {
        light: 'rgba(0, 0, 0, 0.87)',
      },
    },
    edgeSize: {
      small: '14px',
    },
    elevation: {
      light: {
        medium:
          '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
      },
    },
    font: {
      family: 'IBM Plex Sans',
      size: '18px',
      height: '20px',
    },
  },
}

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  return (
    <Grommet theme={theme}>
      <div>
        <Search />
        <Cart />
        <table>
          <TableHeader />
          <Table />
        </table>
      </div>
    </Grommet>
  )
}
