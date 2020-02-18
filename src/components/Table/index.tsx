import * as React from 'react'
import TableRow from '../TableRow'
import { useSelector } from 'react-redux'
import { AppState } from '../../types'

const Table = () => {
  const { filteredItems } = useSelector((state: AppState) => state.countries)

  return (
    <tbody>
      {filteredItems.map(country => (
        <TableRow country={country} />
      ))}
    </tbody>
  )
}

export default Table
