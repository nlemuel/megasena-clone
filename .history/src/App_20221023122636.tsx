import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'


export default function App() {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      </Routes>
  );
}