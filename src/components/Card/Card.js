import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
	return (
		<Link to={`/accommodation/${props.id}`} className={styles.container}>
			<img src={props.cover} alt={props.title} className={styles.cover} />
			<h2 className={styles.title}>{props.title}</h2>
		</Link>
	);
}
