import styles from "./Slideshow.module.css";
import { useState } from "react";
import { ReactComponent as DirectionArrow } from "../../assets/left_arrow.svg";

export default function Slideshow({ pictures }) {
	// Création du state qui servira d'index au slideshow, initialisé à 0
	const [currentIndex, setCurrentIndex] = useState(0);

	// Fonction qui change le currentIndex grâçe au setter à l'index suivant
	const NextSlide = () => {
		const isLastSlide = currentIndex === pictures.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	// Fonction qui change le currentIndex grâçe au setter à l'index précédent
	const PreviousSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div className={styles.slider}>
			{/* Affichage conditionnel des flèches et de la numérotation du slideshow en fonction du nombre d'images */}
			{pictures.length > 1 ? (
				<>
					<DirectionArrow
						className={styles.arrowIcon}
						onClick={PreviousSlide}
					/>
					<DirectionArrow
						className={`${styles.arrowIcon} ${styles.arrowIconRight}`}
						onClick={NextSlide}
					/>
					<span className={styles.text}>
						{currentIndex + 1}/{pictures.length}
					</span>
				</>
			) : (
				""
			)}
			<img
				src={pictures[currentIndex]}
				alt={`slide n°${currentIndex + 1}`}
				className={styles.image}
			/>
		</div>
	);
}
