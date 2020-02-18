// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'

export const FILTER_ALL_COUNTRIES = 'FILTER_ALL_COUNTRIES'

export const ADD_COUNTRY_TO_CART = 'ADD_COUNTRY_TO_CART'
export const REMOVE_COUNTRY_FROM_CART = 'REMOVE_COUNTRY_FROM_CART'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}
/////////////////// Components props

export type Language = {
  name: string
}

export type Country = {
  name: string
  nativeName: string
  flag: string
  population: string
  region: string
  languages: Language[]
}

export type TableRowProps = {
  country: Country
}

export type FlagProps = {
  imageUrl: string
  name: string
}

// //////////////////////////////////////////////////////////////////////////////////////// A Country

export type GetAllCountriesAction = {
  type: typeof GET_ALL_COUNTRIES
  payload: {
    countries: Country[]
  }
}

export type FilterAllCountriesAction = {
  type: typeof FILTER_ALL_COUNTRIES
  payload: {
    searchText: string
  }
}

export type AddCountryToCartAction = {
  type: typeof ADD_COUNTRY_TO_CART
  payload: {
    country: Country
  }
}

export type RemoveCountryFromCartAction = {
  type: typeof REMOVE_COUNTRY_FROM_CART
  payload: {
    country: Country
  }
}

export type CountriesActions =
  | GetAllCountriesAction
  | FilterAllCountriesAction
  | AddCountryToCartAction
  | RemoveCountryFromCartAction

// countries
export type CountriesState = {
  items: Country[]
  filteredItems: Country[]
  inCartItems: Country[]
}

export type AppState = {
  product: ProductState
  ui: UiState
  countries: CountriesState
}
