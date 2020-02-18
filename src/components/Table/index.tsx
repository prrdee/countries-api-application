import * as React from 'react'
import TableRow from '../TableRow'
import { TableProps } from '../../types'

const Table = ({ countries }: TableProps) => {
  return (
    <tbody>
      {countries.map(country => (
        <TableRow country={country} />
      ))}
    </tbody>
  )
}

export default Table
