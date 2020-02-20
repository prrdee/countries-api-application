import * as React from 'react'
import Flag from '../Flag'
import { TableRowProps, AppState } from '../../types'
import { addCountryToCart } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { TableCell, TableRow as GrommentTableRow, Button } from 'grommet'
import { AddCircle } from 'grommet-icons'

const TableRow = ({ country }: TableRowProps) => {
  const inCartItems = useSelector(
    (state: AppState) => state.countries.inCartItems
  )

  const dispatch = useDispatch()

  return (
    <GrommentTableRow>
      <TableCell>
        <Flag imageUrl={country.flag} name={country.name} />
      </TableCell>
      <TableCell>
        <Link to={`/countries/${country.name}`}>{country.name}</Link>
      </TableCell>
      <TableCell>{country.population}</TableCell>
      <TableCell>
        {country.languages.map(language => (
          <ul key={language.name}>
            <li>{language.name}</li>
          </ul>
        ))}
      </TableCell>
      <TableCell>{country.region}</TableCell>
      <TableCell>
        <Button
          disabled={
            inCartItems.find(item => item.name === country.name) ? true : false
          }
          label="ADD"
          icon={<AddCircle />}
          primary={true}
          onClick={() => dispatch(addCountryToCart(country))}
        />
      </TableCell>
    </GrommentTableRow>
  )
}

export default TableRow
