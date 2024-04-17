import React from 'react'
import Formacion from '../data/Formacion'
import '../App.css'

export const FormacionPage = () => {
    return (
        <div className="Pers-Container d-flex justify-content-center">
            {Formacion.map((curso, index) => (
                <div key={index} className="cards" >
                    <img src={curso.img} className='mb-4 align-center' alt="Img" width="90%" height="50%" />
                    <div className="card-body">
                        <h5 className="card-title mb-4 text-center">{curso.Academic}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item listbg">{curso.InstName}</li>
                        <li className="list-group-item listbg">{curso.Learned}</li>
                        <li className="list-group-item listbg">{curso.devtools}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}
