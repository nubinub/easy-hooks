import {useState} from 'react';

const useToggle = (init) => {
    const [value, setValue] = useState(!!init);

    const toggleValue = () => {
        setValue(!value);
    };

    return [value, toggleValue];
};

export default useToggle;