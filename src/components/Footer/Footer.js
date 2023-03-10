import styles from "./Footer.module.css";
import { ReactComponent as ReactLogo } from "../../assets/logo.svg";

export default function Footer() {
	return (
		<footer>
			<ReactLogo alt="kasa logo footer" className={styles.logo} />
			<span className={styles.text}>
				© 2020 Kasa. All rights reserved
			</span>
		</footer>
	);
}
