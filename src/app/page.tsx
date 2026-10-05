import Image from "next/image";
import background from "../shared/assets/images/desktop-background.svg";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.left}>
				<Image src={background} alt="" className={styles.background} />
			</section>
			<section className={styles.right}></section>
		</main>
	);
}
