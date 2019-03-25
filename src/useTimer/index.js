import {useState, useEffect, useCallback} from 'react';

const useTimer = (interval = 1000) => {
    const [timer, setTimer] = useState(0);
    const [intervalId, setIntervalId] = useState();

    const stop = useCallback(() => {
        if (intervalId) {
            setIntervalId();
            clearInterval(intervalId);
        }
    }, [intervalId]);

    const clear = useCallback(() => {
        stop();
        setTimer(0);
    }, [stop]);

    const start = useCallback(() => {
        if (!intervalId) {
            stop();
            const id = setInterval(() => {
                setTimer((timer) => timer + interval);
            }, interval);
            setIntervalId(id);
        }
    }, [stop, interval, intervalId]);

    useEffect(() => {
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [intervalId])

    return [timer, start, stop, clear];
};

export default useTimer;
