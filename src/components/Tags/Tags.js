import styles from "./Tags.module.css";

export default function Tags(props) {
	return <span className={styles.title}>{props.title}</span>;
}
