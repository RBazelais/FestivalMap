const base = '/api/events'

const EventsAPI = {
	async getAllEvents() {
		try {
			const res = await fetch(base)
			if (!res.ok) throw new Error('Network response was not ok')
			return await res.json()
		} catch (err) {
			return [
				{ id: 1, title: 'Opening Night', date: '2025-10-10', time: '19:00', image: '' },
				{ id: 2, title: 'Acoustic Afternoon', date: '2025-10-11', time: '14:00', image: '' }
			]
		}
	},

	async getEventsById(id) {
		try {
			const res = await fetch(`${base}/${id}`)
			if (!res.ok) throw new Error('Network response was not ok')
			return await res.json()
		} catch (err) {
			// fallback: return a single event shaped object
			return { id, title: 'Sample Event', date: '2025-10-10', time: '19:00', image: '', remaining: 0 }
		}
	}
}

export default EventsAPI
