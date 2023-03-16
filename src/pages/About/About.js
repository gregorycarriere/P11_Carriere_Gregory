import styles from "./About.module.css";
import React from "react";
import Banner from "../../components/Banner/Banner";
import image from "../../assets/img_about.jpg";

export default function About() {
	return (
		<div className={styles.container}>
			<Banner url={image} alt="image de montagne" text="" />
		</div>
	);
}
