import * as React from 'react'

import Cart from '../Cart'
import { Menu, Header, Box } from 'grommet'
import Search from '../Search'

const ApplicationBar = () => {
  return (
    <Header background="brand" justify="evenly" pad="medium">
      <Menu
        label="Themes"
        items={[
          {
            label: (
              <Box>
                <Box background="neutral-1" pad="medium" />
              </Box>
            ),
            onClick: () => {},
          },
          {
            label: (
              <Box>
                <Box background="neutral-2" pad="medium" />
              </Box>
            ),
            onClick: () => {},
          },
          {
            label: (
              <Box>
                <Box background="neutral-3" pad="medium" />
              </Box>
            ),
            onClick: () => {},
          },
          {
            label: (
              <Box>
                <Box background="neutral-4" pad="medium" />
              </Box>
            ),
            onClick: () => {},
          },
        ]}
      />
      <Search />
      <Cart />
    </Header>
  )
}

export default ApplicationBar
