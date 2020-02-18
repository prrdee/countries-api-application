// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'

export const FILTER_ALL_COUNTRIES = 'FILTER_ALL_COUNTRIES'

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

// //////////////////////////////////////////////////////////////////////////////////////// A Country
export type Country = {
  name: string
  region: string
  population: string
  flag: string
}

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

export type CountriesActions = GetAllCountriesAction | FilterAllCountriesAction

// countries
export type CountriesState = {
  items: Country[]
  filteredItems: Country[]
}

export type AppState = {
  product: ProductState
  ui: UiState
  countries: CountriesState
}
