import '../../styles/Rate.css'
import InactiveStar from "../../assets/images/Star-inactive.png";
import ActiveStar from "../../assets/images/Star-active.png";

export default function Rate({ score }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="rate-counter">
			{stars.map((level) =>
				score >= level ? (
					<img
						key={level.toString()}
						className="star"
						src={ActiveStar}
						alt="rating star"
					/>
				) : ( //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
					<img
						key={level.toString()}
						className="star"
						src={InactiveStar}
						alt="rating star"
					/>
				)
			)}
		</div>
	);
}