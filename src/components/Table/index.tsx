import * as React from 'react'
import TableRow from '../TableRow'
import { useSelector } from 'react-redux'
import { AppState } from '../../types'
import { Box } from 'grommet'
import TableHeader from '../TableHeader'

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
