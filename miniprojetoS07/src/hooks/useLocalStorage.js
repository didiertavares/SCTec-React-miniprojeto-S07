import { useState, useEffect } from "react"


export function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState(() => {
        const savedData = localStorage.getItem(key)

        if (savedData === null) {
            return initialValue
        }

        return JSON.parse(savedData)
        
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}