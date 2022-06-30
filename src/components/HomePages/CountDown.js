import React from 'react';
import useTimer from '../../hooks/useTimer';

const CountDown = () => {
    const {
        hour,
        minute,
        second,
    } = useTimer();

    return (
        <div>
            <p className='mt-20 mb-10'>10% OFF on all courses* | Offer Valid For</p>

            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">

                <div className="flex flex-col p-2 bg-primary text-white rounded-box ">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 2 }}></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col p-2 bg-primary text-white   rounded-box ">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": minute }}></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col p-2 bg-primary text-white rounded-box ">
                    <span className="countdown font-mono text-5xl">
                        <span id='counterElement' style={{ "--value": second }}></span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    );
};

export default CountDown;