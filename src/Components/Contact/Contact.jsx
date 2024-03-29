import React from 'react'
import "./Style.css"
import Header from './Header'
import Details from './Details'
import Map from './Map'
import Form from './Form'


export default function Contact() {
    return (<>
        <Header />
        <section id="contact-details">
            <Details />
            <Map />
        </section>

        <section id="form-details">
            <Form/>
        </section>
    </>
    )
}
