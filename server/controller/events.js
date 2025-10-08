import { pool } from '../config/database.js'

export const getAllEvents = async (req, res) => {
    try {
        const results = await pool.query(`
            SELECT e.*, l.name as location_name 
            FROM events e
            JOIN locations l ON e.location_id = l.id
            ORDER BY e.start_time ASC
        `)
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const getEventsByLocation = async (req, res) => {
    const locationId = parseInt(req.params.locationId)
    
    try {
        const results = await pool.query(`
            SELECT e.*, l.name as location_name
            FROM events e
            JOIN locations l ON e.location_id = l.id
            WHERE e.location_id = $1
            ORDER BY e.start_time ASC
        `, [locationId])
        
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}