import Image from "next/image";
import background from "../shared/assets/images/desktop-background.svg";
import desktopHero from "../shared/assets/images/desktop-hero.jpg";
import logo from "../shared/assets/images/logo.svg";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.left}>
				<Image src={background} alt="" className={styles.background} />
				<div className={styles.body}>
					<Image src={logo} alt="Logo" />
					<h1 className={styles.header}>
						WE&apos;RE{" "}
						<span className={styles.heading}>COMING SOON</span>
					</h1>
					<p className={styles.content}>
						Hello fellow shoppers! We&apos;re currently building our
						new fashion store. Add your email below to stay
						up-to-date with announcements and our launch deals.
					</p>
					<input
						type="email"
						name="email"
						className={styles.emailInput}
						placeholder="Email Address"
					/>
				</div>
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
