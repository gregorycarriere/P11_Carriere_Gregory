import Banner from "../../components/Banner/Banner";
import image from "../../assets/img_home.jpg";
import styles from "./Home.module.css";
import data from "../../data/logements.json";
import Card from "../../components/Card/Card";

export default function Home() {
	const cardsGallery = data.map((card) => {
		return (
			<Card
				key={card.id}
				id={card.id}
				cover={card.cover}
				title={card.title}
			/>
		);
	});

	return (
		<div>
			<Banner
				url={image}
				alt="home banner - coastal landscape"
				text="Chez vous, partout et ailleurs"
			/>
			<div className={styles.cardsGallery}>{cardsGallery}</div>
		</div>
	);
}
