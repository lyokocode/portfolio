import { useEffect, useRef } from 'react';
import "./systemHealt.scss";
import useConnection from '~/hooks/useConnection';
import { AiOutlineWifi } from 'react-icons/ai';
import { BsWifiOff } from 'react-icons/bs';
import useBattery from '~/hooks/useBattery';
import { BiSolidBatteryCharging } from 'react-icons/bi';

const SystemHealth = ({ close }) => {

    const { status } = useConnection()
    const { level, charging, dischargingTime } = useBattery()



    const closeActionRef = useRef();

    const handleKeyPress = (event) => {
        if (event.keyCode === 27) { // 27 is the keyCode for the "Escape" key
            close();
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (closeActionRef.current && !closeActionRef.current.contains(event.target)) {
                close();
            }
        };

        const handleOutsideClick = (event) => {
            if (closeActionRef.current && !closeActionRef.current.contains(event.target)) {
                handleClickOutside(event);
            }
        };

        const handleKeyPressEvent = (event) => {
            handleKeyPress(event);
        };

        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('keydown', handleKeyPressEvent);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            document.removeEventListener('keydown', handleKeyPressEvent);
        };
    }, [close]);

    return (
        <div className="systemHealt" ref={closeActionRef}>
            <h3 className="title">System Health</h3>

            <div className='desc'>
                <p>Hello user, you will see the system properties in this area.</p>
            </div>
            <section className='status'>
                <h6>Internet Status</h6>

                <div className='statusContainer'>
                    {status ? (
                        <div className='text'>
                            <p>online</p>
                            <AiOutlineWifi />
                        </div>
                    ) : (
                        <div className='text'>
                            <p>offline</p>
                            <BsWifiOff />
                        </div>
                    )}
                </div>
            </section>
            <section className='battery'>
                <h6>Battery Status</h6>

                <div className='batteryContainer'>
                    <div className='info'>
                        <p className='text'>
                            battery level : %{level.toFixed(2)}
                        </p>
                    </div>
                </div>
                <div className='batteryContainer'>
                    <div className='info'>
                        {
                            dischargingTime !== Infinity && (
                                <p className='text'>
                                    estimated charging time : {(dischargingTime / 60).toFixed(2)} dk
                                </p>
                            )
                        }
                    </div>
                </div>
                <div className='batteryContainer'>
                    <div className='info'>
                        <p className='text'>
                            Is it charging?: {charging ? (
                                <div className='chargingStatus'>
                                    <BiSolidBatteryCharging />
                                </div>
                            ) : (
                                "No"
                            )}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SystemHealth;
