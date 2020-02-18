import * as React from 'react'
import { SearchProps } from '../../types'

const Search = ({ handleSearchTextChange }: SearchProps) => {
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
