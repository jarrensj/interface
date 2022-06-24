import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CurrencyId } from 'src/utils/currencyId'
import { logger } from 'src/utils/logger'

export interface FavoritesState {
  tokens: CurrencyId[]
  watchedAddresses: Address[]
  // add other types of assets here, e.g. nfts
}

const initialState: FavoritesState = {
  tokens: [],
  watchedAddresses: [],
}

export const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavoriteToken: (
      state,
      { payload: { currencyId } }: PayloadAction<{ currencyId: string }>
    ) => {
      state.tokens.indexOf(currencyId) === -1
        ? state.tokens.push(currencyId)
        : logger.warn(
            'slice',
            'addFavoriteToken',
            `Attempting to favorite a token twice (${currencyId})`
          )
    },
    removeFavoriteToken: (
      state,
      { payload: { currencyId } }: PayloadAction<{ currencyId: string }>
    ) => {
      const newTokens = state.tokens.filter((c) => c !== currencyId)

      if (newTokens.length === state.tokens.length) {
        logger.warn(
          'slice',
          'removeFavoriteToken',
          `Attempting to un-favorite a token that was not in favorites (${currencyId})`
        )
      }

      state.tokens = newTokens
    },
    addWatchedAddress: (state, { payload: { address } }: PayloadAction<{ address: Address }>) => {
      !state.watchedAddresses.includes(address)
        ? state.watchedAddresses.push(address)
        : logger.warn(
            'slice',
            'addWatchedAddress',
            `Attempting to watch an address twice (${address})`
          )
    },
    removeWatchedAddress: (
      state,
      { payload: { address } }: PayloadAction<{ address: Address }>
    ) => {
      const newWatched = state.watchedAddresses.filter((a) => a !== address)
      if (newWatched.length === state.watchedAddresses.length) {
        logger.warn(
          'slice',
          'removeWatchedAddress',
          `Attempting to remove an address not found in watched list (${address})`
        )
      }
      state.watchedAddresses = newWatched
    },
  },
})

export const { addFavoriteToken, removeFavoriteToken, addWatchedAddress, removeWatchedAddress } =
  slice.actions
export const { reducer: favoritesReducer, actions: favoritesActions } = slice
