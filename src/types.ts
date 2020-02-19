// Action types

export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES'

export const FILTER_ALL_COUNTRIES = 'FILTER_ALL_COUNTRIES'

export const SORT_COUNTRIES = 'SORT_COUNTRIES'

export const ADD_COUNTRY_TO_CART = 'ADD_COUNTRY_TO_CART'
export const REMOVE_COUNTRY_FROM_CART = 'REMOVE_COUNTRY_FROM_CART'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

export type HeaderObject = {
  name: string
  isSorted: boolean
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}
/////////////////// Components props

export type Language = {
  name: string
  iso639_1: string
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

export type SortCountriesAction = {
  type: typeof SORT_COUNTRIES
  payload: {
    header: HeaderObject
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
  | SortCountriesAction

// countries
export type CountriesState = {
  items: Country[]
  filteredItems: Country[]
  inCartItems: Country[]
}

export type AppState = {
  ui: UiState
  countries: CountriesState
}
