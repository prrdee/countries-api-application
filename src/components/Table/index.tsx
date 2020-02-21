import * as React from 'react'
import { useSelector } from 'react-redux'

import TableRow from '../TableRow'
import TableHeader from '../TableHeader'
import { AppState } from '../../types'

import { Box } from 'grommet'

const Table = () => {
  const { filteredItems } = useSelector((state: AppState) => state.countries)

  return (
    <Box>
      <table>
        <TableHeader />
        <tbody>
          {filteredItems.map(country => (
            <TableRow key={country.name} country={country} />
          ))}
        </tbody>
      </table>
    </Box>
  )
}

export default Table
