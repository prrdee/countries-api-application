import * as React from 'react'
import { useDispatch } from 'react-redux'
import { filterAllCountries } from '../../redux/actions'

const Search = () => {
  const dispatch = useDispatch()

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(filterAllCountries(event.target.value))

  return (
    <input
      type="search"
      placeholder="Search"
      aria-label="Search"
      name="searchText"
      onChange={handleSearchTextChange}
    ></input>
  )
}

export default Search
