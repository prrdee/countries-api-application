import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../types'
import { removeCountryFromCart } from '../../redux/actions'
import { DropButton, Box, Stack, Text, Button } from 'grommet'
import { Cart as GrommitCart, SubtractCircle } from 'grommet-icons'
import { ThemeContext } from '../../themes'

const Cart = () => {
  const dispatch = useDispatch()
  const countries = useSelector(
    (state: AppState) => state.countries.inCartItems
  )

  const { theme } = React.useContext(ThemeContext)

  return (
    <DropButton
      plain={true}
      label={
        <Stack anchor="top-right">
          <GrommitCart size="large" />
          <Box background="red" pad={{ horizontal: 'xsmall' }} round>
            <Text>{countries.length}</Text>
          </Box>
        </Stack>
      }
      dropAlign={{ top: 'bottom', right: 'right' }}
      dropContent={
        <Box pad="large" background="light-2">
          <h1>Cart</h1>
          {countries.length <= 0 && <h2>No countries in cart</h2>}

          <ul>
            {countries.map(country => (
              <li key={country.name} style={{ margin: '10px' }}>
                <img
                  src={country.flag}
                  alt={country.name}
                  width="40px"
                  height="20px"
                />
                {'    '}
                <Text size="large">
                  <strong>{country.name}</strong>
                </Text>
                {'  '}
                <Button
                  label="Remove"
                  primary={true}
                  color={theme.foreground}
                  icon={<SubtractCircle />}
                  onClick={() => dispatch(removeCountryFromCart(country))}
                />
              </li>
            ))}
          </ul>
        </Box>
      }
    />
  )
}

export default Cart
