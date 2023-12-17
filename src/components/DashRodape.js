import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useLocation } from 'react-router-dom'

export default function DashRodape() {
    const navegar = useNavigate()
    const { pathname } = useLocation()

    const irHomeClick = () => {
        navegar('/dash')
    }

    let vaiHomeBotao = null
    if (pathname !== '/dash') {
        vaiHomeBotao = (
            <button
                className='dash-footer__button icon-button'
                title='home'
                onClick={irHomeClick}
            >
                <FontAwesomeIcon icon={faHouse} />
            </button> 
        )
    }

    return (
        <footer className='dash-footer'>
            {vaiHomeBotao}
            <p>Usuário:</p>
            <p>Status:</p>
        </footer>
    )
}
