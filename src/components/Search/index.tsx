import * as React from 'react'
import { useDispatch } from 'react-redux'
import { filterAllCountries } from '../../redux/actions'
import { TextInput, Box } from 'grommet'

const Search = () => {
  const dispatch = useDispatch()

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(filterAllCountries(event.target.value))

  return (
    <>
      <Box>
        <TextInput
          type="search"
          placeholder="Search"
          aria-label="Search"
          name="searchText"
          onChange={handleSearchTextChange}
        />
      </Box>
    </>
  )
}

export default Search
