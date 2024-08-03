import '../../styles/Card.css'

function Card(cover,title) {
    return (
        <div className="CardList">
        <article className="CardItem">
            <img src={cover} alt={title} />
            <h2>{title}</h2>
        </article>

        </div>
    )
}

export default Card