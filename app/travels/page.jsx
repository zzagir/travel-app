import styles from './travels.module.scss'
import { travel } from '../../travels'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'

const page = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.layoutText}>
				<h2>Let’s travel now</h2>
				<span>Best deals</span>
			</div>
			<div className={styles.travel}>
				{travel.map((travel) => (
					<div key={travel.id} className={styles.travelBox}>
						<div className={styles.imageContainer}>
							<div
								style={{
									width: '164px',
									height: '164px',
									position: 'relative',
									borderRadius: '20px',
									alignItems: 'center',
								}}
							>
								<Image
									src={`/${travel.img}`}
									alt={travel.city}
									fill
									style={{ objectFit: 'cover', borderRadius: '20px' }}
									draggable={false}
									sizes="1000px"
								/>
							</div>
						</div>
						<div className={styles.travelText}>
							<h2>{travel.city}</h2>
							<div className={styles.travelReviews}>
								<span>{travel.country}</span>
								<div>
									<AiFillStar size={20} fill="#FFC567" />
									{travel.reviews}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default page
