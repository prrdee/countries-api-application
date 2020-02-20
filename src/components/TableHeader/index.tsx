import * as React from 'react'
import { useDispatch } from 'react-redux'
import { sortCountries } from '../../redux/actions'
import {
  TableHeader as GrommetTableHeader,
  TableRow,
  TableCell,
  Heading,
} from 'grommet'

const header = [
  { name: 'Flag', isSorted: false },
  { name: 'Name', isSorted: false },
  { name: 'Population', isSorted: false },
  { name: 'Languages', isSorted: false },
  { name: 'Region', isSorted: false },
  { name: 'Action', isSorted: false },
]

const TableHeader = () => {
  const dispatch = useDispatch()

  return (
    <GrommetTableHeader>
      <TableRow>
        {header.map(element => (
          <TableCell key={element.name}>
            <Heading
              level="2"
              onClick={() => {
                dispatch(sortCountries(element))
                element.isSorted = element.isSorted ? false : true
              }}
            >
              {element.name}
            </Heading>
          </TableCell>
        ))}
      </TableRow>
    </GrommetTableHeader>
  )
}

export default TableHeader
