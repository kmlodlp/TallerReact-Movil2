import React from 'react'
import Experiencia from '../data/Experiencia'
import '../App.css'

export const ExperienciaPage = () => {
    return (
        <div className="Pers-Container d-flex justify-content-center">
            {Experiencia.map((Expe, index) => (
                <div key={index} className="cards" >
                    <img src={Expe.img} className='mb-4 align-center' alt="Img" width="90%" height="50%" />
                    <div className="card-body">
                        <h5 className="card-title mb-4 text-center">{Expe.proyect}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
}
