import styles from "./Host.module.css";

export default function Host({ name, picture }) {
	return (
		<div className={styles.container}>
			<h2 className={styles.name}>{name}</h2>
			<img src={picture} alt={name} className={styles.image} />
		</div>
	);
}
