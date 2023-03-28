import { Link } from "react-router-dom";
import styles from "./Error.module.css";

export default function Error() {
	// Reset la scrollbar en haut de page au chargement
	window.scrollTo(0, 0);

	return (
		<div className={styles.container}>
			<h1 className={styles.error}>404</h1>
			<p className={styles.description}>
				<span className={styles.span}>Oups! La page que</span> vous
				demandez n'existe pas.
			</p>
			<Link to="/" className={styles.link}>
				Retourner sur la page d'accueil
			</Link>
		</div>
	);
}
