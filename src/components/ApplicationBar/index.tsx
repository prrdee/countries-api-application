import * as React from 'react'

import Cart from '../Cart'
import Search from '../Search'
import ThemeMenu from '../ThemeMenu'

import { ThemeContext } from '../../themes'

import { Header, Heading, Anchor } from 'grommet'
import { Globe } from 'grommet-icons'

const ApplicationBar = () => {
  const { theme } = React.useContext(ThemeContext)

  return (
    <Header background={theme.foreground} justify="evenly">
      <Anchor href="/" label={<Globe size="large" />} />

      <Anchor
        href="/"
        label={
          <Heading level="1" size="small">
            Countries of World
          </Heading>
        }
        color="white"
      />
      <Search />
      <ThemeMenu />
      <Cart />
    </Header>
  )
}

export default ApplicationBar
