const dates = {
	formatTime(timeStr) {
		// expect timeStr like '19:00' or a Date/time string
		if (!timeStr) return ''
		try {
			const [hh, mm] = timeStr.split(':')
			const h = parseInt(hh, 10)
			const m = mm || '00'
			const suffix = h >= 12 ? 'PM' : 'AM'
			const hour = ((h + 11) % 12) + 1
			return `${hour}:${m} ${suffix}`
		} catch {
			return timeStr
		}
	},

	formatRemainingTime(remaining) {
		// remaining in minutes or null
		if (remaining == null) return ''
		const mins = Math.max(0, Number(remaining))
		const hours = Math.floor(mins / 60)
		const rmins = mins % 60
		return hours > 0 ? `${hours}h ${rmins}m` : `${rmins}m`
	},

	formatNegativeTimeRemaining(remainingStr, id) {
		// no-op for now; original code may manipulate DOM, keep placeholder
		return
	}
}

export default dates
