import * as React from 'react'
import { Button } from 'grommet'
import { useContext } from 'react'
import { ThemeContext } from '../../themes'
import { Paint } from 'grommet-icons'

const ThemeMenu = () => {
  const { theme, switchTheme } = useContext(ThemeContext)

  return (
    <Button
      icon={<Paint color="white" />}
      label="Change Theme"
      onClick={() => {
        switchTheme()
      }}
      color={theme.foreground}
      primary={true}
    />
  )
}

export default ThemeMenu
