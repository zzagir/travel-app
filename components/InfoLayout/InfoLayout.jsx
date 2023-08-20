'use client'
import styles from './InfoLayout.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cn from 'clsx'

const InfoLayout = ({
	firstText,
	secondText,
	thirdText,
	img,
	infoText,
	infoDescription,
}) => {
	const path = usePathname()

	let currentPath
	if (path === '/info/1') currentPath = '/info/2'
	else if (path === '/info/2') currentPath = '/info/3'
	else currentPath = '/'

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
					<Link
						href="/info/1"
						className={cn(styles.infoLink, {
							[styles.active]: path === '/info/1' ? styles.active : '',
						})}
					></Link>
					<Link
						href="/info/2"
						className={cn(styles.infoLink, {
							[styles.active]: path === '/info/2' ? styles.active : '',
						})}
					></Link>
					<Link
						href="/info/3"
						className={cn(styles.infoLink, {
							[styles.active]: path === '/info/3' ? styles.active : '',
						})}
					></Link>
				</div>
				<Link href={currentPath}>
					<span className={styles.footerText}>
						{path === '/info/3' ? 'Start' : 'Next'}
					</span>
				</Link>
			</footer>
		</div>
	)
}

export default InfoLayout
