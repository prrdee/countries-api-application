import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../types'
import { filterAllCountries, fetchAllCountries } from '../redux/actions'

export default function Home() {
  const dispatch = useDispatch()
  const { filteredItems } = useSelector((state: AppState) => state.countries)

  useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(filterAllCountries(event.target.value))

  return (
    <>
      <h1>Home page</h1>
      <input name="searchText" onChange={handleSearchTextChange} />
      <table>
        <tr>
          <th>FLAG</th>
          <th>NAME</th>
          <th>POPULATION</th>
          <th>REGION</th>
        </tr>
        {filteredItems.map(element => (
          <tr>
            <td>{element.flag}</td>
            <td>{element.name}</td>
            <td>{element.population}</td>
            <td>{element.region}</td>
          </tr>
        ))}
      </table>
    </>
  )
}
