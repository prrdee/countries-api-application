import * as React from 'react'
import Flag from '../Flag'
import { TableRowProps } from '../../types'
import { addCountryToCart } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const TableRow = ({ country }: TableRowProps) => {
  const dispatch = useDispatch()

  return (
    <tr>
      <td>
        <Flag imageUrl={country.flag} name={country.name} />
      </td>
      <td>
        <Link to={`/countries/${country.name}`}>{country.name}</Link>
      </td>
      <td>{country.population}</td>
      <td>
        {country.languages.map(language => (
          <ul key={language.name}>
            <li>{language.name}</li>
          </ul>
        ))}
      </td>
      <td>{country.region}</td>
      <td>
        <button onClick={() => dispatch(addCountryToCart(country))}>ADD</button>
      </td>
    </tr>
  )
}

export default TableRow
