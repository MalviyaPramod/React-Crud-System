import React from 'react';
import { Route, Routes, Link } from "react-router-dom"
import NavbarComponent from './components/NavbarComponent';
import ReducerOne from './components/Reducers/ReducerOne/ReducerOne';
import ReducerTwo from './components/Reducers/ReducerTwo/ReducerTwo';
const App = () => {
  return (
    <>
      <NavbarComponent/>
      <Routes>
        <Route path="/reducer-one" element={ <ReducerOne/> } />
        <Route path="/reducer-two" element={ <ReducerTwo/> } />
      </Routes>
    </>
  )
}

export default App
