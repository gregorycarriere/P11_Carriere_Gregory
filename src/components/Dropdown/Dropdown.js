import styles from "./Dropdown.module.css";
import { ReactComponent as Icon } from "../../assets/dropdown_arrow.svg";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Dropdown(props) {
	const [isOpen, setIsOpen] = useState(false);
	let { pathname } = useLocation();

	return (
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
				<Icon
					alt="dropdown_icon"
					className={`${styles.dropdownIcon} 
						${isOpen && styles.dropdownIconInv}`}
				/>
			</div>
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
