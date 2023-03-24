import styles from "./Title.module.css";

export default function Title({ title, location }) {
	return (
		<>
			<h1 className={styles.title}>{title}</h1>
			<h2 className={styles.location}>{location}</h2>
		</>
	);
}
