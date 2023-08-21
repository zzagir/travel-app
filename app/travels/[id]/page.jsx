import { AiFillStar } from 'react-icons/ai'
import fetchDataById from '../../../utils/fetchDataById'
import { FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'
import styles from './travels.module.scss'
import { WiSnow, WiCloud, WiDayCloudy, WiRainWind } from 'react-icons/wi'

const page = ({ params: { id } }) => {
	const travel = fetchDataById(id)
	return (
		<div className={styles.wrapper}>
			<div
				style={{ backgroundImage: `url(/${travel.img})` }}
				className={styles.layout}
			>
				<Link href="/travels" style={{ width: '35px' }}>
					<FiArrowLeft size={35} />
				</Link>
				<h2>{travel.city}</h2>
				<span>{travel.country}</span>
				<span>
					<AiFillStar size={20} fill="#FFC567" />
					{travel.reviews}
				</span>
			</div>
			<div className={styles.info}>
				<div className={styles.boxSmall}>
					<div className={styles.boxS}>
						<h4>Weather</h4>
						<span className={styles.weather}>
							{travel.weather}°
							{travel.weather <= 0 ? (
								<WiSnow size={30} />
							) : travel.weather <= 10 ? (
								<WiRainWind size={30} />
							) : travel.weather <= 20 ? (
								<WiCloud size={30} />
							) : (
								<WiDayCloudy size={30} />
							)}
						</span>
					</div>
					<div className={styles.boxS}>
						<h4>Hotels</h4>
						<span>{travel.hotels}</span>
					</div>
				</div>
				<div className={styles.boxM}>
					<h4>People now</h4>
					<span>{travel.people}</span>
				</div>
				<button className={styles.button}>Go to travel</button>
			</div>
		</div>
	)
}

export default page
