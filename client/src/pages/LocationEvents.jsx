import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'

const LocationEvents = ({index}) => {
    const [location, setLocation] = useState(null)
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchLocationAndEvents = async () => {
            try {
                const response = await fetch(`/api/locations/${index}`)
                if (!response.ok) {
                    throw new Error('Failed to fetch location data')
                }
                const data = await response.json()
                setLocation(data)
                setEvents(data.events || [])
            } catch (err) {
                setError(err.message)
                console.error('Error fetching location data:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchLocationAndEvents()
    }, [index])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>
    if (!location) return <div>Location not found</div>

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    <img src={location.image} />
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents