import * as React from 'react'
import Flag from '../Flag'
import { TableRowProps } from '../../types'

const TableRow = ({ country }: TableRowProps) => (
  <tr>
    <td>
      <Flag imageUrl={country.flag} name={country.name} />
    </td>
    <td>{country.name}</td>
    <td>{country.population}</td>
    <td>
      {country.languages.map(language => (
        <span key={language.name}>{language.name}</span>
      ))}
    </td>
    <td>{country.region}</td>
  </tr>
)

export default TableRow
