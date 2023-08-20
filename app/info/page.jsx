'use client'
import { useState } from 'react'
import { info } from '../../travels'
import InfoLayout from '../../components/InfoLayout/InfoLayout'
import styles from './info.module.scss'
import Link from 'next/link'
import cn from 'clsx'

const InfoPage = () => {
	const [i, setI] = useState(0)

	const handleNextClick = () => {
		if (i < info.length - 1) {
			setI(i + 1)
		}
	}

	return (
		<div style={{ height: '100%' }}>
			<InfoLayout
				firstText={info[i].firstText}
				img={info[i].img}
				infoDescription={info[i].infoDescription}
				infoText={info[i].infoText}
				secondText={info[i].secondText}
				thirdText={info[i].thirdText}
				i={i}
			>
				<footer className={styles.footer}>
					<div className={styles.path}>
						<button
							className={cn(styles.infoLink, {
								[styles.active]: i === 0,
							})}
							onClick={() => setI(0)}
						></button>
						<button
							className={cn(styles.infoLink, {
								[styles.active]: i === 1,
							})}
							onClick={() => setI(1)}
						></button>
						<button
							className={cn(styles.infoLink, {
								[styles.active]: i === 2,
							})}
							onClick={() => setI(2)}
						></button>
					</div>
					{i < 2 ? (
						<button onClick={handleNextClick} className={styles.footerButton}>
							Next
						</button>
					) : (
						<Link
							href={'/travels'}
							onClick={handleNextClick}
							className={styles.footerText}
						>
							Start
						</Link>
					)}
				</footer>
			</InfoLayout>
		</div>
	)
}

export default InfoPage
