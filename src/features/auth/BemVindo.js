import React from 'react'
import { Link } from 'react-router-dom'

export default function BemVindo() {

    const data = new Date()
    const hoje = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'long' }).format(data)

    return (
        <section className="welcome">

            <p>{hoje}</p>

            <h1>Bem vindo</h1>

            <p><Link to="/dash/notas">Ver techNotes</Link></p>

            <p><Link to="/dash/usuarios">Ver Configurações de usuário</Link></p>
        </section>
    )
}
