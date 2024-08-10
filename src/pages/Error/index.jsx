import { Link } from 'react-router-dom'
import '../../styles/Error.css'

function Error() {
    return (
        <div className='Error-container'>
            <p className='Error-title'>404</p>
            <p className='Error-text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='Error-link'>Retourner vers la page d'Accueil.</Link>
        </div>
    )
}

export default Error