import styles from "./Accommodation.module.css";
import { useParams, Navigate } from "react-router";
import data from "../../data/logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import Title from "../../components/Title/Title";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";
import Ratings from "../../components/Ratings/Ratings";
import Dropdown from "../../components/Dropdown/Dropdown";

export default function Accommodation() {
	// Reset la scrollbar en haut de page au chargement
	window.scrollTo(0, 0);

	// Récupération des données passer par l'url
	const params = useParams();
	// On stocke les données du logement qui correspond à l'id récupérer par l'url
	const logement = data.find((element) => element.id === params.id);

	// On vérifie si logement à reçu des données, si non, on envoi l'utilisateur sur la page d'erreur
	if (!logement) {
		return <Navigate to="error" />;
	}

	// Création de la liste des tags à partir des données de logement
	const tagsList = logement.tags.map((tag, index) => {
		return <Tags key={index} title={tag} />;
	});

	return (
		<>
			<Slideshow pictures={logement.pictures} />
			<div>
				<div className={styles.content}>
					<section className={styles.firstSection}>
						<Title
							title={logement.title}
							location={logement.location}
						/>
						<div className={styles.tagsList}>{tagsList}</div>
					</section>
					<section className={styles.secondSection}>
						<Host
							name={logement.host.name}
							picture={logement.host.picture}
						/>
						<Ratings number={logement.rating} />
					</section>
				</div>
				<section className={styles.thirdSection}>
					<Dropdown
						title="Description"
						content={logement.description}
					/>
					<Dropdown
						title="Équipements"
						content={logement.equipments}
					/>
				</section>
			</div>
		</>
	);
}
