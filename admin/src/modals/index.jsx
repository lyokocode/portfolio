import modalData from "@/modal.js"
import { destroyModal, useModals } from "@/utils/modal"
import "./modal.scss"
import { MdOutlineClose } from "react-icons/md";
import { useEscKeyListener } from "@/hooks/useEscKeyListener";


export default function Modal() {
    const modals = useModals()

    useEscKeyListener(() => {
        destroyModal();
    });

    return (
        <div >
            {
                modals && modals.map((modal, i) => {
                    const m = modalData.find(m => m.name === modal.name)
                    return (
                        <div className="modalContainer" key={i}>

                            <div className="modalContent">
                                <button onClick={() => destroyModal()} className="modalCloseBtn">
                                    <MdOutlineClose size={25} />
                                </button>
                                <m.element close={destroyModal} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}