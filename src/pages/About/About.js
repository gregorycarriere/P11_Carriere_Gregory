import styles from "./About.module.css";
import Banner from "../../components/Banner/Banner";
import image from "../../assets/img_about.jpg";
import data from "../../data/AboutData";
import Dropdown from "../../components/Dropdown/Dropdown";

export default function About() {
	// Reset la scrollbar en haut de page au chargement
	window.scrollTo(0, 0);

	// Création des dropdowns à partir des données du fichier AboutData.js
	const dropdownMenu = data.map((item) => {
		return (
			<Dropdown key={item.id} title={item.title} content={item.content} />
		);
	});

	return (
		<div>
			<Banner
				url={image}
				alt="about banner - mountain landscape"
				text=""
			/>
			<section className={styles.container}>{dropdownMenu}</section>
		</div>
	);
}
