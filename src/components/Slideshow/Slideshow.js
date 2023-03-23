import styles from "./Slideshow.module.css";
import data from "../../data/logements.json";
import { useParams } from "react-router";
import { useState } from "react";
import { ReactComponent as DirectionArrow } from "../../assets/left_arrow.svg";

export default function Slideshow() {
	const params = useParams();
	const logement = data.find((element) => element.id === params.id);
	const images = logement.pictures;
	const [currentIndex, setCurrentIndex] = useState(0);

	const NextSlide = () => {
		const isLastSlide = currentIndex === images.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const PreviousSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div className={styles.slider}>
			{images.length > 1 ? (
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
						{currentIndex + 1}/{images.length}
					</span>
				</>
			) : (
				""
			)}
			<img
				src={images[currentIndex]}
				alt={`slide n°${currentIndex + 1}`}
				className={styles.image}
			/>
		</div>
	);
}
