import styles from "./Ratings.module.css";
import { ReactComponent as Star } from "../../assets/star.svg";

export default function Ratings(props) {
	let stars = [];

	for (let i = 0; i < props.number; i++) {
		stars.push(
			<Star
				key={i}
				className={`${styles.star} ${styles.starFull}`}
				alt="star"
			/>
		);
	}
	for (let f = 0; f < 5 - props.number; f++) {
		stars.push(
			<Star key={f + props.number} className={styles.star} alt="star" />
		);
	}

	return <div className={styles.container}>{stars}</div>;
}
