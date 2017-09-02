import { get } from '../get.js'

export function getAdDate() {
	const result = get('/api/homeAd')
	return result
}

export function getListDate(city, page) {
	const result = get('/api/homeList/' + encodeURIComponent(city))
	return result
}