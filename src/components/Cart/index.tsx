import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../types'
import { removeCountryFromCart } from '../../redux/actions'

const Cart = () => {
  const dispatch = useDispatch()
  const countries = useSelector(
    (state: AppState) => state.countries.inCartItems
  )

  return (
    <>
      <h1>Home page</h1>
      {countries.length <= 0 && <div>No products in cart</div>}
      <ul>
        {countries.map(country => (
          <li key={country.name}>
            {`${country.name} - Population: ${country.population}`}
            {'  '}
            <button onClick={() => dispatch(removeCountryFromCart(country))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Cart
