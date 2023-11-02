import { createElement, useEffect, useState } from "react"

export default function useConnection() {
    const [status, setStatus] = useState(true)

    useEffect(() => {
        const events = ["online", "offline"]
        const eventHandle = () => {
            setStatus(navigator.online)
        }
        events.forEach(event => window.addEventListener(event, eventHandle))

        return () => {
            events.forEach(event => window.removeEventListener(event, eventHandle))
        }
    }, [])

    const Offline = ({ children, props }) => {
        if (!status) {
            return createElement('div', props, children)
        }
        return null
    }

    return { status, Offline }
}