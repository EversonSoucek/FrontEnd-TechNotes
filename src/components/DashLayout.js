import React from 'react'
import { Outlet } from 'react-router-dom'
import DashCabecalho from './DashCabecalho'
import DashRodape from "./DashRodape"

export default function DashLayout() {
  return (
    <>
        <DashCabecalho/>
        <div className='dash-container'>
            <Outlet/>
        </div>
        <DashRodape/>
    </>
  )
}
