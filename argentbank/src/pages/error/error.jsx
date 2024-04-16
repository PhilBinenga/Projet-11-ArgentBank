import React from 'react'
import { Link } from 'react-router-dom'

function error() {
  return (
    <main className='main bg-dark'>
        <div className='error'>
            <h1>Erreur 404</h1>
            <p>La page demandée n'est pas disponible</p>
            <Link to='/'>Retour à la page d'accueil</Link>      
        </div>
    </main>
  )
}

export default error
