import { get } from '../get.js'

export function getAdDate() {
	const result = get('/api/homeAd')
	return result
}

export function getListData(city, page) {
	const result = get('/api/homeList/' + encodeURIComponent(city) + '/' + page)
	return result
}