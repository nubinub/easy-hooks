import {useState, useCallback} from 'react';

const useToggle = (init) => {
    const [value, setValue] = useState(!!init);

    const toggleValue = useCallback(() => {
        setValue(!value);
    }, [value]);

    return [value, toggleValue];
};

export default useToggle;