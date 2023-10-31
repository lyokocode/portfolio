import modalData from "../modal.js"
import { destroyModal, useModals } from "../utils/modal"
import "./modal.scss"

export default function Modal() {
    const modals = useModals()
    return (
        <div >
            {
                modals.map((modal, i) => {
                    const m = modalData.find(m => m.name === modal.name)
                    return (
                        <div className="modalContainer" key={i}>
                            <div className="modalContent">
                                <m.element close={destroyModal} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}