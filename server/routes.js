import express from 'express'
import * as locations from './controller/locations.js'
import * as events from './controller/events.js'

const router = express.Router()

// Location routes
router.get('/locations', locations.getAllLocations)
router.get('/locations/:id', locations.getLocationById)

// Event routes
router.get('/events', events.getAllEvents)
router.get('/locations/:locationId/events', events.getEventsByLocation)

export default router