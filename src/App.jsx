import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import TvShows from './components/TvShows'
import Persons from './components/Persons'
import MovieDetails from './components/MovieDetails'
import TvDetails from './components/TvDetails'
import PersonDetails from './components/PersonDetails'
import Trailer from './components/partials/Trailer'
import NotFound from './components/partials/NotFound'
import About from './components/About'
import ContactUs from './components/ContactUs'

const App = () => {
  return (
    <div className='bg-[#1F1E24] w-screen h-screen flex'>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trendings' element={<Trending/>} />
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movie/details/:id' element={<MovieDetails/>} >
        <Route path='/movie/details/:id/trailer' element={<Trailer/>}/>
        </Route>
        <Route path='/tv' element={<TvShows/>}/>
       <Route path='/tv/details/:id' element={<TvDetails/>} >
       <Route path='/tv/details/:id/trailer' element={<Trailer/>}/>
       </Route>
        <Route path='/persons' element={<Persons/>}/>
        <Route path='/person/details/:id' element={<PersonDetails/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App