import { travel } from '../travels'

function fetchDataById(id) {
	const item = travel.find((item) => item.id === parseInt(id))

	return item || null
}

export default fetchDataById
