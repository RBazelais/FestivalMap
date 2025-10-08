import { pool } from './database.js'
import './dotenv.js'
import eventsData from '../data/events.js'
import locationsData from '../data/locations.js'

const createLocationsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS locations;

        CREATE TABLE IF NOT EXISTS locations (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            city VARCHAR(100) NOT NULL,
            state VARCHAR(2) NOT NULL,
            zip VARCHAR(10) NOT NULL,
            image VARCHAR(255),
            created_at TIMESTAMP DEFAULT now()
        );
    `

    try {
        await pool.query(createTableQuery)
        console.log('🎉 locations table created successfully')
    } catch (err) {
        console.error('⚠️ error creating locations table', err)
    }
}

const createEventsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS events;

        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            location_id INTEGER NOT NULL REFERENCES locations(id),
            description TEXT NOT NULL,
            performer VARCHAR(255) NOT NULL,
            genre VARCHAR(100),
            start_time TIMESTAMP NOT NULL,
            end_time TIMESTAMP NOT NULL,
            image VARCHAR(255),
            category VARCHAR(100) DEFAULT 'music',
            featured BOOLEAN DEFAULT false,
            submitted_by VARCHAR(255),
            created_at TIMESTAMP DEFAULT now()
        );
    `

    try {
        await pool.query(createTableQuery)
        console.log('🎉 events table created successfully')
    } catch (err) {
        console.error('⚠️ error creating events table', err)
    }
}

const seedLocationsTable = async () => {
    await createLocationsTable()

    const insertText = `INSERT INTO locations (name, address, city, state, zip, image) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id`

    for (const loc of locationsData) {
        const values = [
            loc.name,
            loc.address,
            loc.city,
            loc.state,
            loc.zip,
            loc.image
        ]

        try {
            await pool.query(insertText, values)
            console.log(`✅ Location: ${loc.name} added successfully`)
        } catch (err) {
            console.error('⚠️ error inserting location', loc.name, err)
        }
    }
}

const seedEventsTable = async () => {
    await createEventsTable()

    const insertText = `INSERT INTO events (title, location_id, description, performer, genre, start_time, end_time, image, featured, submitted_by, created_at) 
                       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`

    for (const ev of eventsData) {
        const values = [
            ev.title,
            ev.location_id,
            ev.description,
            ev.performer,
            ev.genre,
            ev.start_time,
            ev.end_time,
            ev.image,
            ev.featured,
            ev.submitted_by,
            ev.created_at
        ]

        try {
            await pool.query(insertText, values)
            console.log(`✅ Event: ${ev.title} by ${ev.performer} added successfully`)
        } catch (err) {
            console.error('⚠️ error inserting event', ev.title, err)
        }
    }
}

const resetDatabase = async () => {
    await seedLocationsTable()  // Must run first to create location IDs
    await seedEventsTable()
}

resetDatabase()