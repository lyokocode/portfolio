import { createElement, useEffect, useState } from "react";

export default function useBattery() {
    const [level, setLevel] = useState(0);
    const [charging, setCharging] = useState(false);
    const [dischargingTime, setDischargingTime] = useState(0);

    useEffect(() => {
        async function batteryHandle() {
            try {
                const battery = await navigator.getBattery();
                setLevel(battery.level * 100);
                setCharging(battery.charging);
                setDischargingTime(battery.dischargingTime);
            } catch (error) {
                console.error("Battery information not available", error);
            }
        }
        batteryHandle();
    }, []);

    const CriticalBattery = ({ children, props }) => {
        if (level < 20 && !charging) {
            return createElement('div', props,
                children || "PLEASE CHARGER YOUR DEVICE"
            )

        }
    }

    return {
        level,
        charging,
        dischargingTime,
        CriticalBattery
    };
}
