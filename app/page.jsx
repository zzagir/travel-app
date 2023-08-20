import Link from 'next/link'
import styles from './page.module.scss'

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<span className={styles.text}>
				Let’s enjoy the<h1>Beautiful World</h1>
			</span>
			<div className={styles.buttons}>
				<Link href="/" className={styles.button}>
					<button className={styles.buttonOne}>Go to travel</button>
				</Link>
				<Link href="/info" className={styles.button}>
					<button className={styles.buttonTwo}>More info</button>
				</Link>
			</div>
		</div>
	)
}
