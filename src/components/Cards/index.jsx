import '../../styles/Card.css'

function Card({cover,title}) {
    return (
       
        <article className="CardItem">
            <img className="CardImage" src={cover} alt={title} />
            <h2 className="CardTitle">{title}</h2>
            
        </article>

      
    )
}

export default Card