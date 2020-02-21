import React from 'react'

export const themes = {
  global: {
    font: {
      family: 'IBM Plex Sans',
    },
    table: {
      border: 'all',
    },
  },
  neutral: {
    foreground: '#00739D',
  },
  alternate: {
    foreground: '#A2423D',
  },
}

export const ThemeContext = React.createContext({
  theme: themes.neutral,
  switchTheme: () => {},
})
