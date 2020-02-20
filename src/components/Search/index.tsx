import * as React from 'react'
import { useDispatch } from 'react-redux'
import { filterAllCountries } from '../../redux/actions'
import { TextInput } from 'grommet'

const Search = () => {
  const dispatch = useDispatch()

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(filterAllCountries(event.target.value))

  return (
    <TextInput
      type="search"
      placeholder="Search"
      aria-label="Search"
      name="searchText"
      onChange={handleSearchTextChange}
    />
  )
}

export default Search
