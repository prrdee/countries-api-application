import * as React from 'react'
const header = ['Flag', 'Name', 'Population', 'Language', 'Region', 'Action']

const TableHeader = () => {
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
