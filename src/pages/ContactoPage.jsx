import React from 'react'
import Contacto from '../data/Contacto'
import '../App.css'

export const ContactoPage = () => {
    return (
        <div className="Per-Container ">
            <div className="card d-flex justify-content-center">
                <div className="card-header text-uppercase text-center text-primary">
                    Contactos Principales
                </div>
                <ul className="list-group list-group-flush">
                    {Contacto.map((Contact, index) => (
                        <li key={index} className="list-group-item bg-info">
                            <span className='text-uppercase'>
                                <img className='Imgs mx-3 ' src={Contact.img} alt={Contact.alt} /> {Contact.Medio}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
