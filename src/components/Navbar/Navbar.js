import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<nav>
			{/* On vérifie l'état du lien actif et change son affichage en fonction */}
			<NavLink
				to="/"
				end
				className={({ isActive }) =>
					isActive ? "" : styles.defaultLink
				}>
				Accueil
			</NavLink>
			<NavLink
				to="/about"
				end
				className={({ isActive }) =>
					isActive ? "" : styles.defaultLink
				}>
				A Propos
			</NavLink>
		</nav>
	);
}
