import {useState, useEffect} from 'react';

const useLocalStorage = (key, init) => {
    const [value, setValue] = useState(init);

    const updateValue = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        const event = new Event('storage');
        event.key = key;
        event.newValue = newValue;
        window.dispatchEvent(event);
    };

    useEffect(() => {
        const persistedValue = localStorage.getItem(key);
        if (persistedValue !== undefined) {
            setValue(JSON.parse(persistedValue));
        }

        const listener = (e) => {
            if (e.key === key) {
                setValue(JSON.parse(e.newValue));
            } 
        };

        window.addEventListener('storage', listener, true);

        return () => {
            window.removeEventListener('storage', listener);
        };
    }, []);

   

    return [value, updateValue];
};

export default useLocalStorage;