import styles from "./Slideshow.module.css";
import { useState } from "react";
import { ReactComponent as DirectionArrow } from "../../assets/left_arrow.svg";

export default function Slideshow({ pictures }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const NextSlide = () => {
		const isLastSlide = currentIndex === pictures.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const PreviousSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div className={styles.slider}>
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
