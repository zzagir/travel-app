import InfoLayout from '@/components/InfoLayout/InfoLayout'
import { info } from '@/travels'

const InfoPage = () => {
	return (
		<div style={{ height: '100%' }}>
			<InfoLayout
				firstText={info[1].firstText}
				img={info[1].img}
				infoDescription={info[1].infoDescription}
				infoText={info[1].infoText}
				secondText={info[1].secondText}
				thirdText={info[1].thirdText}
			/>
		</div>
	)
}

export default InfoPage
