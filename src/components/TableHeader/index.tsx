import * as React from 'react'
import { useDispatch } from 'react-redux'
import { sortCountries } from '../../redux/actions'

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
    <thead>
      <tr>
        {header.map(element => (
          <th key={element.name}>
            <button
              onClick={() => {
                dispatch(sortCountries(element))
                element.isSorted = element.isSorted ? false : true
              }}
            >
              {element.name}
            </button>
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeader
