import { ReactComponent as Logo } from "../../assets/logo.svg";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<header>
			<Logo alt="kasa logo" className={styles.logo} />
			<Navbar />
		</header>
	);
}
