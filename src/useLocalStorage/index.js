import {useState, useEffect} from 'react';

const useLocalStorage = (key, init) => {
    const [value, setValue] = useState(init);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const persistedValue = localStorage.getItem(key);
        if (persistedValue !== undefined) {
            setValue(persistedValue);
        }

        const listener = (e) => {
            if (e.key === key) {
                setValue(e.newValue);
            } 
        };

        window.addEventListener('storage', listener, true);

        setMounted(true);

        return () => {
            window.removeEventListener('storage', listener);
        };
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem(key, value);
            const event = new Event('storage');
            event.key = key;
            event.newValue = value;
            window.dispatchEvent(event);
        }
    }, [value]);

    return [value, setValue];
};

export default useLocalStorage;