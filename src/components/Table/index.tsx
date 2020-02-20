import * as React from 'react'
import TableRow from '../TableRow'
import { useSelector } from 'react-redux'
import { AppState } from '../../types'
import { Table as GrommetTable, TableBody, Box } from 'grommet'
import TableHeader from '../TableHeader'

const Table = () => {
  const { filteredItems } = useSelector((state: AppState) => state.countries)

  return (
    <Box>
      <GrommetTable>
        <TableHeader />
        <TableBody>
          {filteredItems.map(country => (
            <TableRow key={country.name} country={country} />
          ))}
        </TableBody>
      </GrommetTable>
    </Box>
  )
}

export default Table
