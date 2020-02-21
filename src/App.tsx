import React, { useState } from 'react'

import Routes from './Routes'
import { themes } from './themes'
import { ThemeContext } from './themes'

import { Grommet } from 'grommet'

export default function App() {
  const [context, setContext] = useState({
    theme: themes.neutral,

    switchTheme: () => {
      setContext(current => ({
        ...current,
        theme:
          current.theme === themes.neutral ? themes.alternate : themes.neutral,
      }))
    },
  })

  return (
    <ThemeContext.Provider value={context}>
      <Grommet theme={themes}>
        <Routes />
      </Grommet>
    </ThemeContext.Provider>
  )
}
