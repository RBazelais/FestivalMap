const events = [
  // Echo Lounge - Intimate venue perfect for alternative/indie acts
  {
    title: 'Sleep Token - Ritual in Echo',
    location_id: 1,
    description: 'An intimate evening with Sleep Token, featuring their haunting melodies and atmospheric soundscapes.',
    performer: 'Sleep Token',
    genre: 'alternative metal',
    start_time: '2025-10-10T19:00:00Z',
    end_time: '2025-10-10T22:00:00Z',
    image: '/public/party.png',
    featured: true,
    submitted_by: 'admin',
    created_at: '2025-09-01T12:00:00Z'
  },
  {
    title: 'Low Roar Experience',
    location_id: 1,
    description: 'Atmospheric indie folk with haunting vocals and ethereal soundscapes.',
    performer: 'Low Roar',
    genre: 'indie folk',
    start_time: '2025-10-11T19:00:00Z',
    end_time: '2025-10-11T21:30:00Z',
    image: '/public/party.png',
    featured: false,
    submitted_by: 'venue_manager',
    created_at: '2025-09-01T12:00:00Z'
  },
  {
    title: 'Remi Wolf - Indie Pop Night',
    location_id: 1,
    description: 'High-energy indie pop with funky grooves and infectious melodies.',
    performer: 'Remi Wolf',
    genre: 'indie pop',
    start_time: '2025-10-12T20:00:00Z',
    end_time: '2025-10-12T23:00:00Z',
    image: '/public/party.png',
    featured: true,
    submitted_by: 'promoter',
    created_at: '2025-09-01T12:00:00Z'
  },

  // House of Blues - Rock and heavy acts
  {
    title: 'System of a Down - Return to Unity',
    location_id: 2,
    description: 'An explosive night of alternative metal with the legendary System of a Down.',
    performer: 'System of a Down',
    genre: 'alternative metal',
    start_time: '2025-10-10T20:00:00Z',
    end_time: '2025-10-10T23:00:00Z',
    image: '/public/party.png',
    featured: true,
    submitted_by: 'festival_team',
    created_at: '2025-09-02T09:30:00Z'
  },
  {
    title: 'Paramore: This Is Why Tour',
    location_id: 2,
    description: 'Paramore brings their electrifying pop-punk energy to Unity Plaza.',
    performer: 'Paramore',
    genre: 'alternative rock',
    start_time: '2025-10-11T19:30:00Z',
    end_time: '2025-10-11T22:30:00Z',
    image: '/public/party.png',
    featured: true,
    submitted_by: 'festival_team',
    created_at: '2025-09-02T09:30:00Z'
  },
  {
    title: 'Rage Against The Machine x Living Colour',
    location_id: 2,
    description: 'A powerful double bill of revolutionary rock and metal.',
    performer: 'Rage Against The Machine & Living Colour',
    genre: 'alternative metal',
    start_time: '2025-10-12T19:00:00Z',
    end_time: '2025-10-12T23:00:00Z',
    image: '/public/party.png',
    featured: true,
    submitted_by: 'festival_team',
    created_at: '2025-09-02T09:30:00Z'
  },

  // Unity Pavilion - Jazz and eclectic fusion
  {
    title: 'Thundercat & Flying Lotus Present: Cosmic Fusion',
    location_id: 3,
    description: 'A mind-bending evening of jazz fusion and electronic experimentation.',
    performer: 'Thundercat & Flying Lotus',
    genre: 'jazz fusion',
    start_time: '2025-10-10T20:00:00Z',
    end_time: '2025-10-10T23:00:00Z',
    image: '/public/party.png',
    featured: true,
    submitted_by: 'venue_manager',
    created_at: '2025-09-03T14:15:00Z'
  },
  {
    title: 'Vulfpeck Funk Session',
    location_id: 3,
    description: 'Get ready for an evening of infectious funk grooves and musical virtuosity.',
    performer: 'Vulfpeck',
    genre: 'funk',
    start_time: '2025-10-11T19:30:00Z',
    end_time: '2025-10-11T22:30:00Z',
    image: '/public/party.png',
    featured: true,
    submitted_by: 'venue_manager',
    created_at: '2025-09-03T14:15:00Z'
  },
  {
    title: 'Jazz Future: Samara Joy & Nick West',
    location_id: 3,
    description: 'Rising stars of contemporary jazz showcase their innovative takes on the genre.',
    performer: 'Samara Joy with Nick West',
    genre: 'jazz',
    start_time: '2025-10-12T19:00:00Z',
    end_time: '2025-10-12T21:30:00Z',
    image: '/public/party.png',
    featured: true,
    submitted_by: 'venue_manager',
    created_at: '2025-09-03T14:15:00Z'
  },
  {
    title: 'Arturo O\'Farril: Afro Latin Jazz Orchestra',
    location_id: 3,
    description: 'Grammy-winning pianist and composer presents an evening of groundbreaking Afro Latin jazz.',
    performer: 'Arturo O\'Farril',
    genre: 'latin jazz',
    start_time: '2025-10-13T19:30:00Z',
    end_time: '2025-10-13T22:00:00Z',
    image: '/public/party.png',
    featured: true,
    submitted_by: 'venue_manager',
    created_at: '2025-09-03T14:15:00Z'
  },

  // House of Blues additions
  {
    title: 'Weezer: Blue Album Night',
    location_id: 2,
    description: 'Alternative rock legends perform their iconic debut album plus greatest hits.',
    performer: 'Weezer',
    genre: 'alternative rock',
    start_time: '2025-10-13T20:00:00Z',
    end_time: '2025-10-13T23:00:00Z',
    image: '/public/party.png',
    featured: true,
    submitted_by: 'festival_team',
    created_at: '2025-09-02T09:30:00Z'
  },
  {
    title: 'Coheed and Cambria: Neverender',
    location_id: 2,
    description: 'Progressive rock masters deliver an epic performance of conceptual rock.',
    performer: 'Coheed and Cambria',
    genre: 'progressive rock',
    start_time: '2025-10-14T20:00:00Z',
    end_time: '2025-10-14T23:00:00Z',
    image: '/public/party.png',
    featured: true,
    submitted_by: 'festival_team',
    created_at: '2025-09-02T09:30:00Z'
  },
  {
    title: 'Winona Fighter: Breakthrough Night',
    location_id: 1,
    description: 'Rising indie sensation brings their dynamic sound to an intimate venue.',
    performer: 'Winona Fighter',
    genre: 'indie rock',
    start_time: '2025-10-13T20:00:00Z',
    end_time: '2025-10-13T22:30:00Z',
    image: '/public/party.png',
    featured: false,
    submitted_by: 'venue_manager',
    created_at: '2025-09-01T12:00:00Z'
  },

  // American Airlines Arena - Large venue for major acts
  {
    title: 'Hip-Hop Luminaries',
    location_id: 4,
    description: 'A historic night of hip-hop featuring legendary performers.',
    performer: 'Kendrick Lamar with Ms. Lauryn Hill',
    genre: 'hip-hop',
    start_time: '2025-10-10T19:00:00Z',
    end_time: '2025-10-10T23:30:00Z',
    image: '/public/party.png',
    featured: true,
    submitted_by: 'promoter',
    created_at: '2025-09-04T10:00:00Z'
  },
  {
    title: 'Future Beats Summit',
    location_id: 4,
    description: 'An evening of groundbreaking beats and electronic soul.',
    performer: 'Kaytranada & Anderson .Paak',
    genre: 'electronic/hip-hop',
    start_time: '2025-10-11T20:00:00Z',
    end_time: '2025-10-11T23:30:00Z',
    image: '/public/party.png',
    featured: true,
    submitted_by: 'promoter',
    created_at: '2025-09-04T10:00:00Z'
  },
  {
    title: 'Bad Bunny X Chicano Batman',
    location_id: 4,
    description: 'El Conejo Malo teams up with LA\'s finest psychedelic soul band for an unforgettable fusion of Latin trap and alternative.',
    performer: 'Bad Bunny with Chicano Batman',
    genre: 'latin/trap',
    start_time: '2025-10-12T20:00:00Z',
    end_time: '2025-10-12T23:00:00Z',
    image: '/public/party.png',
    featured: true,
    submitted_by: 'promoter',
    created_at: '2025-09-04T10:00:00Z'
  },
  {
    title: 'Juanes: Origen Tour',
    location_id: 4,
    description: 'Latin rock legend Juanes brings his electrifying live show celebrating the roots of Latin American music.',
    performer: 'Juanes',
    genre: 'latin rock',
    start_time: '2025-10-15T20:00:00Z',
    end_time: '2025-10-15T22:30:00Z',
    image: '/public/party.png',
    featured: true,
    submitted_by: 'promoter',
    created_at: '2025-09-04T10:00:00Z'
  },
  {
    title: 'Billie Eilish: Happier Than Ever Tour',
    location_id: 4,
    description: 'Grammy Award-winning artist Billie Eilish brings her mesmerizing live show to Unity Plaza.',
    performer: 'Billie Eilish',
    genre: 'pop',
    start_time: '2025-10-13T20:00:00Z',
    end_time: '2025-10-13T22:30:00Z',
    image: '/public/party.png',
    featured: true,
    submitted_by: 'promoter',
    created_at: '2025-09-04T10:00:00Z'
  },
  {
    title: 'Hot Girl Summer Forever',
    location_id: 4,
    description: 'A powerhouse lineup featuring two of hip-hop\'s most dynamic performers.',
    performer: 'Megan Thee Stallion & Doechii',
    genre: 'hip-hop',
    start_time: '2025-10-14T20:00:00Z',
    end_time: '2025-10-14T23:00:00Z',
    image: '/public/party.png',
    featured: true,
    submitted_by: 'promoter',
    created_at: '2025-09-04T10:00:00Z'
  }
]

export default events
