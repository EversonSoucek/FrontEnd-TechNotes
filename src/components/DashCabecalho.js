import React from 'react'
import { Link } from 'react-router-dom'

export default function DashCabecalho() {
    return (
        <header className="dash-header">
            <div className="dash-header__container">
                <Link to="/dash">
                    <h1 className="dash-header__title">techNotes</h1>
                </Link>
                <nav className="dash-header__nav">
                    {/* adicionar Botões nav depois */}
                </nav>
            </div>
        </header>
    )
}
