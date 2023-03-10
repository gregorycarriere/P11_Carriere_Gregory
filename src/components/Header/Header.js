import { ReactComponent as ReactLogo } from "../../assets/logo.svg";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<header>
			<ReactLogo alt="kasa logo" className={styles.logo} />
			<Navbar />
		</header>
	);
}
