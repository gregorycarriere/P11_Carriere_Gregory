import styles from "./Ratings.module.css";
import { ReactComponent as Star } from "../../assets/star.svg";

export default function Ratings(props) {
	// Création d'un tableau pour stocker les étoiles que nous voulons afficher
	let stars = [];

	// Ajout du nombre d'étoiles (pleine) indiqués dans les data du logement
	for (let i = 0; i < props.number; i++) {
		stars.push(
			<Star
				key={i}
				className={`${styles.star} ${styles.starFull}`}
				alt="star"
			/>
		);
	}
	// Ajout du nombre d'étoiles (vide) restantes pour atteindre 5 étoiles
	for (let f = 0; f < 5 - props.number; f++) {
		stars.push(
			<Star key={f + props.number} className={styles.star} alt="star" />
		);
	}

	return <div className={styles.container}>{stars}</div>;
}
