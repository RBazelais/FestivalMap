import { pool } from '../config/database.js'

export const getAllLocations = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM locations ORDER BY name ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const getLocationById = async (req, res) => {
    const locationId = parseInt(req.params.id)
    
    try {
        const locationResult = await pool.query('SELECT * FROM locations WHERE id = $1', [locationId])
        
        if (locationResult.rows.length === 0) {
            return res.status(404).json({ error: 'Location not found' })
        }
        
        const location = locationResult.rows[0]
        
        // Get all events for this location
        const eventsResult = await pool.query(
            'SELECT * FROM events WHERE location_id = $1 ORDER BY start_time ASC',
            [locationId]
        )
        
        res.status(200).json({
            ...location,
            events: eventsResult.rows
        })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}