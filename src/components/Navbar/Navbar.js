import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav>
			<Link to="/" className={styles.link}>
				Accueil
			</Link>
			<Link to="/about" className={styles.link}>
				A Propos
			</Link>
		</nav>
	);
}
