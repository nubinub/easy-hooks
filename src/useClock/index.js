import {useState, useEffect} from 'react';

const useClock = (interval = 1000) => {
    const [clock, setClock] = useState();
    useEffect(() => {
        setClock(new Date().getTime());

        const intervalId = setInterval(() => {
            setClock(new Date().getTime());
        }, interval);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return [clock];
};

export default useClock;