import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../types'
import { removeCountryFromCart } from '../../redux/actions'
import { DropButton, Box, Stack, Text, Button } from 'grommet'
import { Cart as GrommitCart, SubtractCircle } from 'grommet-icons'

const Cart = () => {
  const dispatch = useDispatch()
  const countries = useSelector(
    (state: AppState) => state.countries.inCartItems
  )

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
          <h1>Countries Cart</h1>
          {countries.length <= 0 && <div>No countries in cart</div>}

          <ul>
            {countries.map(country => (
              <li key={country.name}>
                {` Name : ${country.name} -- Population: ${country.population}`}
                {'  '}
                <Button
                  label="Remove"
                  primary={true}
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
