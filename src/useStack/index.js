import { useState, useCallback } from 'react';

const useStack = () => {
    const [stack, setStack] = useState([]);

    const push = useCallback((e) => {
        setStack([...stack, e]);
    }, [stack]);

    const pop = useCallback(() => {
        const newStack = [...stack];
        const e = newStack.pop();
        setStack(newStack);
        return e;
    }, [stack]);

    const empty = useCallback(() => {
        setStack([]);
    }, []);

    return {stack, push, pop, empty};
};

export default useStack;