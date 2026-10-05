import Image from "next/image";
import background from "../shared/assets/images/desktop-background.svg";
import desktopHero from "../shared/assets/images/desktop-hero.jpg";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.left}>
				<Image src={background} alt="" className={styles.background} />
			</section>
			<section className={styles.right}>
				<Image
					src={desktopHero}
					alt=""
					className={styles.desktopHero}
				/>
			</section>
		</main>
	);
}
