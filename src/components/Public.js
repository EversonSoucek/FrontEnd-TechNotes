import React from 'react'
import { Link } from 'react-router-dom'

export default function Public() {
    const content = (
        <section className="public">
            <header>
                <h1>Bem vindo para<span className="nowrap">Dan D. Reparos!</span></h1>
            </header>
            <main className="public__main">
                <p>Localizado em Foo City, Dan D. Reparos providência um time para seus reparos tech</p>
                <address className="public__addr">
                    Dan D. Reparos<br />
                    555 Foo Drive<br />
                    Foo City, CA 12345<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Dan Davidson</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
