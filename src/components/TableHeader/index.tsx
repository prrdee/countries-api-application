import * as React from 'react'
import { TableHeaderProps } from '../../types'

const TableHeader = ({ header }: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        {header.map(element => (
          <th key={element}>
            <h2>{element}</h2>
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeader
