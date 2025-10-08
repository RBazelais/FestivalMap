const base = '/api/locations'

const LocationsAPI = {
	async getAllLocations() {
		try {
			const res = await fetch(base)
			if (!res.ok) throw new Error('Network response was not ok')
			return await res.json()
		} catch (err) {
			// fallback: return a small set of static locations so the UI can render
			return [
				{ id: 1, name: 'Echo Lounge', image: '', address: '123 Echo St', city: 'Austin', state: 'TX', zip: '78701' },
				{ id: 2, name: 'House of Blues', image: '', address: '200 Blues Ave', city: 'Austin', state: 'TX', zip: '78702' },
				{ id: 3, name: 'Pavilion', image: '', address: '9 Pavilion Rd', city: 'Austin', state: 'TX', zip: '78703' },
				{ id: 4, name: 'American Airlines', image: '', address: '1 Airline Pkwy', city: 'Austin', state: 'TX', zip: '78704' }
			]
		}
	}
}

export default LocationsAPI
