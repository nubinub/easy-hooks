import {useState, useEffect} from 'react';

const useTimer = (interval = 1000) => {
    const [timer, setTimer] = useState(0);
    const [intervalId, setIntervalId] = useState();

    const stop = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId();
        }
    };

    const clear = () => {
        stop();
        setTimer(0);
    };
    
    const start = () => {
        stop();
        const id = setInterval(() => {
            setTimer((timer) => timer + interval);
        }, interval);
        setIntervalId(id);
    };

    useEffect(() => {
        return clear;
    }, [])

    return [timer, start, stop, clear];
};

export default useTimer;
