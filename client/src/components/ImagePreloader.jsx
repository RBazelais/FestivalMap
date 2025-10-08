import { useState, useEffect } from 'react'

// A component to preload images
export const ImagePreloader = ({ images }) => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const preloadImages = async () => {
            const promises = Object.values(images).map((src) => {
                return new Promise((resolve, reject) => {
                    const img = new Image()
                    img.src = src
                    img.onload = resolve
                    img.onerror = reject
                })
            })

            try {
                await Promise.all(promises)
                setLoaded(true)
            } catch (err) {
                console.error('Error preloading images:', err)
            }
        }

        preloadImages()
    }, [images])

    return null
}