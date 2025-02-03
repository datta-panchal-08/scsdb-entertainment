import { configureStore } from '@reduxjs/toolkit'
import PersonReducer from './reducers/Personslice'
import TvReducer from './reducers/TvSlice'
import MovieReducer from './reducers/MovieSlice'

export const store = configureStore({
  reducer: {
    movie:MovieReducer,
    tv:TvReducer,
    person:PersonReducer
  },
})