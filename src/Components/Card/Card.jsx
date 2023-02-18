import '../../Styles/Card.css'
import { Link } from 'react-router-dom'

function Card({id, title, cover}) {

	return (
		<Link to={`/housing/${id}`} className="galleryCard">
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
		</Link>
	)
}

export default Card