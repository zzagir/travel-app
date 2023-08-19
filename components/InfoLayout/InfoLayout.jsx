'use client'
import styles from './InfoLayout.module.scss'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const InfoLayout = ({
	firstText,
	secondText,
	thirdText,
	img,
	infoText,
	infoDescription,
}) => {
	const path = usePathname()
	return (
		<div className={styles.wrapper}>
			<span className={styles.firstText}>
				{firstText}
				<h2 className={styles.secondText}>{secondText}</h2>
				{thirdText && <h2 className={styles.thirdText}>{thirdText}</h2>}
			</span>
			<div className={styles.info}>
				<div style={{ width: '300px', height: '300px', position: 'relative' }}>
					<Image
						src={`/${img}`}
						alt={img}
						fill
						objectFit="contain"
						draggable={false}
					/>
				</div>
				<h4>{infoText}</h4>
				<span>{infoDescription}</span>
			</div>
			<footer className={styles.footer}>
				<div className={styles.path}>
					<span className={path === '/info/1' ? styles.active : ''}></span>
					<span className={path === '/info/2' ? styles.active : ''}></span>
					<span className={path === '/info/3' ? styles.active : ''}></span>
				</div>
				<span className={styles.footerText}>Next</span>
			</footer>
		</div>
	)
}

export default InfoLayout
