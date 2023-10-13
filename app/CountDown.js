import React, { useState, useEffect } from 'react';

function CountdownTimer() {
    const [countdown, setCountdown] = useState( {
        days: 0,
        hours: 12,
        minutes: 0,
        seconds: 0,
    } );

    useEffect( () => {
        const interval = setInterval( () => {
            if ( countdown.seconds > 0 ) {
                setCountdown( {
                    ...countdown,
                    seconds: countdown.seconds - 1,
                } );
            } else {
                if ( countdown.minutes > 0 ) {
                    setCountdown( {
                        ...countdown,
                        minutes: countdown.minutes - 1,
                        seconds: 59,
                    } );
                } else {
                    if ( countdown.hours > 0 ) {
                        setCountdown( {
                            ...countdown,
                            hours: countdown.hours - 1,
                            minutes: 59,
                            seconds: 59,
                        } );
                    } else {
                        if ( countdown.days > 0 ) {
                            setCountdown( {
                                ...countdown,
                                days: countdown.days - 1,
                                hours: 23,
                                minutes: 59,
                                seconds: 59,
                            } );
                        } else {
                            clearInterval( interval );
                        }
                    }
                }
            }
        }, 1000 );

        return () => {
            clearInterval( interval );
        };
    }, [countdown] );

    return (
        <div className="countdown">
            <div>{ countdown.days } <span>يوم</span></div>
            <div>{ countdown.hours } <span>ساعه</span></div>
            <div>{ countdown.minutes } <span>دقيقه</span></div>
            <div>{ countdown.seconds } <span>ثواني</span></div>
        </div>
    );
}

export default CountdownTimer;
