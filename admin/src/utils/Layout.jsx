import { Navbar, Sidebar } from "../components"
import { Outlet } from "react-router-dom"
import "../index.scss"
import { useAppearance } from "~/store/appearance/hooks";
import { useEffect } from "react";
import useConnection from "~/hooks/useConnection";
import useBattery from "~/hooks/useBattery";


const Layout = () => {

    const appearance = useAppearance()
    const { Offline } = useConnection()
    const { CriticalBattery } = useBattery()

    useEffect(() => {

        document.documentElement.style.setProperty('--background-primary', appearance.backgroundColor.primary)
        document.documentElement.style.setProperty('--background-primary-alpha', appearance.backgroundColor.primary + 'a6')
        document.documentElement.style.setProperty('--background-secondary', appearance.backgroundColor.secondary)
        document.documentElement.style.setProperty('--background-third', appearance.backgroundColor.third)
        document.documentElement.style.setProperty('--background-modal', appearance.backgroundColor.modal)
        document.documentElement.style.setProperty('--background-global-modal', appearance.backgroundColor.globalModal)

        document.documentElement.style.setProperty('--color-primary', appearance.color.primary)
        document.documentElement.style.setProperty('--color-primary-alpha', appearance.color.primary + '12')
        document.documentElement.style.setProperty('--color-secondary', appearance.color.secondary)
        document.documentElement.style.setProperty('--color-base', appearance.color.base)
        document.documentElement.style.setProperty('--color-base-secondary', appearance.color.baseSecondary)

        document.documentElement.style.setProperty('--box-shadow', appearance.boxShadow)

        document.documentElement.style.setProperty('--font-size', appearance.fontSize + 'px')

    }, [appearance])


    return (
        <main className="app">
            <CriticalBattery>
                <div className="internetStatus ">
                    PLEASE CHARGER YOUR DEVICE!
                </div>
            </CriticalBattery>
            <Offline>
                <div className="internetStatus">
                    check your internet connection!
                </div>
            </Offline>
            <Sidebar />
            <section className="appContainer">

                <Navbar />
                <div className="appWrapper">
                    <Outlet />
                </div>
            </section>
        </main>
    )
}

export default Layout