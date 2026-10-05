"use client";

import Image from "next/image";
import { useState } from "react";
import background from "../shared/assets/images/desktop-background.svg";
import desktopHero from "../shared/assets/images/desktop-hero.jpg";
import logo from "../shared/assets/images/logo.svg";
import styles from "./Home.module.css";

export default function Home() {
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState(false);
	const clickHandler = () => {
		const isEmailValid = email
			.trim()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
		if (!isEmailValid) {
			setEmailError(true);
			return;
		}
		setEmailError(false);
		setEmail("");
	};
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
					<div className={styles.email}>
						<input
							type="email"
							name="email"
							value={email}
							className={styles.emailInput}
							placeholder="Email Address"
							onChange={(event) =>
								setEmail(event.currentTarget.value)
							}
						/>
						<button
							type="button"
							className={styles.emailButton}
							onClick={clickHandler}
						>
							&gt;
						</button>
					</div>
					{emailError && (
						<p className={styles.emailError}>
							Please provide a valid email
						</p>
					)}
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
