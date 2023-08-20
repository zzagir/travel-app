'use client'
import styles from './InfoLayout.module.scss'
import Image from 'next/image'

const InfoLayout = ({
	firstText,
	secondText,
	img,
	infoText,
	infoDescription,
	children,
}) => {
	return (
		<div className={styles.wrapper}>
			<span className={styles.firstText}>
				{firstText}
				<h2 className={styles.secondText}>{secondText}</h2>
			</span>
			<div className={styles.info}>
				<div style={{ width: '300px', height: '300px', position: 'relative' }}>
					<Image
						src={`/${img}`}
						alt={img}
						fill
						style={{ objectFit: 'contain' }}
						draggable={false}
						sizes="300px"
					/>
				</div>
				<h4>{infoText}</h4>
				<span>{infoDescription}</span>
			</div>
			{children && children}
		</div>
	)
}

export default InfoLayout
