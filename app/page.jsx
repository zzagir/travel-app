import styles from './page.module.scss'

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<span className={styles.text}>
				Let’s enjoy the<h1>Beautiful World</h1>
			</span>
			<div className={styles.buttons}>
				<button className={styles.buttonOne}>Go to travel</button>
				<button className={styles.buttonTwo}>More info</button>
			</div>
		</div>
	)
}
