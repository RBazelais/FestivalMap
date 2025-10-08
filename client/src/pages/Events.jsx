import React, { useState, useEffect } from 'react'
import EventsAPI from '../services/EventsAPI'
import '../css/LocationEvents.css'

const Events = () => {
	const [events, setEvents] = useState([])

	useEffect(() => {
		(async () => {
			try {
				const data = await EventsAPI.getAllEvents()
				setEvents(data)
			} catch (err) {
				console.error(err)
			}
		})()
	}, [])

	return (
		<div className='events-page'>
			<header>
				<h2>All Events</h2>
			</header>

			<main>
				{events && events.length > 0 ? (
					events.map(ev => (
						<article key={ev.id} className='event-information'>
							<img src={ev.image} alt={ev.title} />
							<div className='event-information-overlay'>
								<div className='text'>
									<h3>{ev.title}</h3>
									<p>{ev.date} {ev.time}</p>
								</div>
							</div>
						</article>
					))
				) : (
					<h3>No events found</h3>
				)}
			</main>
		</div>
	)
}

export default Events
