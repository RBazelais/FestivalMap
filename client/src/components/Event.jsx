import React, { useState, useEffect } from 'react'
import '../css/Event.css'
import '../css/performer.css'
import EventsAPI from '../services/EventsAPI'
import dates from '../services/dates'
import { getPerformerImage } from '../assets/performerImages'

const Event = ({ id, title, performer, genre, start_time, end_time, image }) => {
    const [timeDisplay, setTimeDisplay] = useState('')
    const [remaining, setRemaining] = useState('')

    useEffect(() => {
        const updateTime = async () => {
            try {
                const startDate = new Date(start_time)
                const endDate = new Date(end_time)
                
                // Format time display
                const timeStr = startDate.toLocaleTimeString('en-US', { 
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true
                })
                
                // Calculate remaining time
                const now = new Date()
                const diffMs = startDate - now
                const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
                const diffHrs = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                
                let remainingText = ''
                if (diffMs < 0) {
                    remainingText = 'Event has passed'
                } else if (diffDays > 0) {
                    remainingText = `${diffDays}d ${diffHrs}h until show`
                } else if (diffHrs > 0) {
                    remainingText = `${diffHrs}h until show`
                } else {
                    remainingText = 'Starting soon!'
                }
                
                setTimeDisplay(timeStr)
                setRemaining(remainingText)
            } catch (error) {
                console.error('Error formatting time:', error)
            }
        }
        
        updateTime()
        const timer = setInterval(updateTime, 60000) // Update every minute
        
        return () => clearInterval(timer)
    }, [start_time, end_time])

    useEffect(() => {
        (async () => {
            try {
                const result = await dates.formatTime(event.time)
                setTime(result)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [event])

    useEffect(() => {
        (async () => {
            try {
                const timeRemaining = await dates.formatRemainingTime(event.remaining)
                setRemaining(timeRemaining)
                dates.formatNegativeTimeRemaining(remaining, event.id)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [event])

    const isPastEvent = new Date(start_time) < new Date()
    const performerImage = getPerformerImage(performer)

    return (
        <article className='event-information'>
            <img 
                src={performerImage} 
                alt={performer}
                className={`performer-image ${isPastEvent ? 'past-event' : ''}`}
            />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{title}</h3>
                    <h4>{performer}</h4>
                    <p className="genre">{genre}</p>
                    <p>
                        <i className="fa-regular fa-calendar fa-bounce"></i>
                        {' '}{new Date(start_time).toLocaleDateString()} <br />
                        {timeDisplay}
                    </p>
                    <p className={remaining.includes('passed') ? 'passed' : ''}>
                        {remaining}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default Event