import styles from "./Dropdown.module.css";
import { ReactComponent as Icon } from "../../assets/dropdown_arrow.svg";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Dropdown(props) {
	// Création du state qui va déterminer si les dropdowns sont ouverts ou fermés, false par défaut
	const [isOpen, setIsOpen] = useState(false);
	// Récupération du chemin de l'url
	let { pathname } = useLocation();

	return (
		// Changement du className de plusieurs éléments du dropdown afin de différencier quand ils sont utilisés sur la page à propos et sur la page logement
		<div
			className={`${styles.wrapper} 
				${pathname === "/about" ? "" : styles.wrapperAcc} `}>
			<div
				className={`${styles.header} 
					${pathname === "/about" ? "" : styles.headerAcc} `}
				onClick={() => setIsOpen(!isOpen)}>
				{pathname === "/about" ? (
					<h1 className={styles.title}>{props.title}</h1>
				) : (
					<h2 className={`${styles.title} ${styles.titleAcc}`}>
						{props.title}
					</h2>
				)}
				{/* Changement du className de l'icone en fonction de l'état du dropdown */}
				<Icon
					alt="dropdown_icon"
					className={`${styles.dropdownIcon} 
						${isOpen && styles.dropdownIconInv}`}
				/>
			</div>
			{/* Affichage conditionnel de la div qui contient les infos du dropdown, changement d'affichage en fonction du title passer pour chaque dropdown (text ou list) */}
			{isOpen && (
				<div className={styles.content}>
					{props.title !== "Équipements" ? (
						<p
							className={`${styles.text} 
								${pathname === "/about" ? "" : styles.textAcc} `}>
							{props.content}
						</p>
					) : (
						<ul className={styles.list}>
							{props.content.map((item) => {
								return (
									<li key={item} className={styles.listItem}>
										{item}
									</li>
								);
							})}
						</ul>
					)}
				</div>
			)}
		</div>
	);
}
