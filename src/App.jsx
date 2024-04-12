import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { PerfilPage } from './pages/PerfilPage'
import { ContactoPage } from './pages/ContactoPage'
import { FormacionPage } from './pages/FormacionPage'
import { ExperienciaPage } from './pages/ExperienciaPage'
import { NavBarApp } from './components/NavBarApp'

export const App = () => {
  return (
    <>
      <NavBarApp />
      <Routes>
        <Route path='/' element={<PerfilPage></PerfilPage>}></Route>
        <Route path='/Contacto' element={<ContactoPage></ContactoPage>}></Route>
        <Route path='/Formacion' element={<FormacionPage></FormacionPage>}></Route>
        <Route path='/Experiencia' element={<ExperienciaPage></ExperienciaPage>}></Route>
      </Routes>
    </>
  )
}
