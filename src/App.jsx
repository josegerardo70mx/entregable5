import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import InputName from './components/InputName'
import Pokedex from './components/Pokedex'
import PokemonDetail from './components/PokemonDetail'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
<HashRouter>
<Routes>

  <Route path="/" element={<InputName />}  />

  <Route element={<ProtectedRoutes />} >
  <Route path="/pokedex" element={<Pokedex />}  />
  <Route path="/pokemondetail" element={<PokemonDetail />}  />
  </Route>













</Routes>  
</HashRouter>
  )
}

export default App
