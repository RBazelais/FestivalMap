// Import all performer images
import sleepTokenImg from './performers/sleep-token.jpg'
import lowRoarImg from './performers/low-roar.jpg'
import remiWolfImg from './performers/remi-wolf.jpg'
import soadImg from './performers/system-of-a-down.jpg'
import paramoreImg from './performers/paramore.jpg'
import rageImg from './performers/rage.jpg'
import livingColourImg from './performers/living-colour.jpg'
import thundercatImg from './performers/thundercat.jpg'
import flyingLotusImg from './performers/flying-lotus.jpg'
import vulfpeckImg from './performers/vulfpeck.jpg'
import samaraJoyImg from './performers/samara-joy.jpg'
import nickWestImg from './performers/nick-west.jpg'
import arturoImg from './performers/arturo-ofarril.jpg'
import weezerImg from './performers/weezer.jpg'
import coheedImg from './performers/coheed.jpg'
import winonaFighterImg from './performers/winona-fighter.jpg'
import kendrickImg from './performers/kendrick.jpg'
import laurynHillImg from './performers/lauryn-hill.jpg'
import kaytrandaImg from './performers/kaytranada.jpg'
import andersonPaakImg from './performers/anderson-paak.jpg'
import badBunnyImg from './performers/bad-bunny.jpg'
import chicanoBatmanImg from './performers/chicano-batman.jpg'
import juanesImg from './performers/juanes.jpg'
import billieEilishImg from './performers/billie-eilish.jpg'
import meganImg from './performers/megan.jpg'
import doechiiImg from './performers/doechii.jpg'

// Map performer names to their images
export const performerImages = {
    'Sleep Token': sleepTokenImg,
    'Low Roar': lowRoarImg,
    'Remi Wolf': remiWolfImg,
    'System of a Down': soadImg,
    'Paramore': paramoreImg,
    'Rage Against The Machine': rageImg,
    'Living Colour': livingColourImg,
    'Thundercat': thundercatImg,
    'Flying Lotus': flyingLotusImg,
    'Vulfpeck': vulfpeckImg,
    'Samara Joy': samaraJoyImg,
    'Nick West': nickWestImg,
    'Arturo O\'Farril': arturoImg,
    'Weezer': weezerImg,
    'Coheed and Cambria': coheedImg,
    'Winona Fighter': winonaFighterImg,
    'Kendrick Lamar': kendrickImg,
    'Ms. Lauryn Hill': laurynHillImg,
    'Kaytranada': kaytrandaImg,
    'Anderson .Paak': andersonPaakImg,
    'Bad Bunny': badBunnyImg,
    'Chicano Batman': chicanoBatmanImg,
    'Juanes': juanesImg,
    'Billie Eilish': billieEilishImg,
    'Megan Thee Stallion': meganImg,
    'Doechii': doechiiImg
}

// Helper function to get image for a performer
export const getPerformerImage = (performerName) => {
    return performerImages[performerName] || '/public/party.png' // fallback to default if not found
}