import { useLocation } from "react-router-dom";
import styles from "./Banner.module.css";

export default function Banner(props) {
	let { pathname } = useLocation();

	console.log(pathname);
	return (
		<div
			className={`${pathname === "/about" ? styles.about_banner : ""} 
			${styles.banner}`}>
			<img
				src={props.url}
				alt={props.alt}
				className={`${
					pathname === "/about" ? styles.about_image : ""
				} ${styles.image}`}
			/>
			<h1 className={styles.text}>{props.text}</h1>
		</div>
	);
}
