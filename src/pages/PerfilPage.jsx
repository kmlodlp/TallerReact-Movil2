import React from 'react'
import DatosPerfil from '../data/PerfilData'
import '../App.css'

export const PerfilPage = () => {
    return (
        <>
            <div className="Per-Container d-flex justify-content-center">
                <div className="container mt-4 ">
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={DatosPerfil.img} alt="Imagen" width='100%' height='100%' />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Nombres</h5>
                                    <p className="card-text">{DatosPerfil.names}</p>
                                    <h5 className="card-title">Apellidos</h5>
                                    <p className="card-text">{DatosPerfil.Lastnames}</p>
                                    <h5 className="card-title">Profesion</h5>
                                    <p className="card-text"><small className="text-body-secondary">{DatosPerfil.Profession}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row m-3 justify-content-center">
                        <div className="col-sm-9 d-flex justify-content-center">
                            <p className="text-description">
                                {DatosPerfil.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
