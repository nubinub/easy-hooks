import {useState, useEffect} from 'react';

const useAsync = (asyncFn, autoFetch = false) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState();
    const [error, setError] = useState();

    const fetch = async() => {
        setIsLoading(true);
        setError();
        setData();
        const {data, error} = await asyncFn();
        setData(data);
        setError(error);
        setIsLoading(false);
    };

    useEffect(() => {
        if (autoFetch) {
            fetch();
        }
    }, []);

    return [data, isLoading, error, fetch];
};

export default useAsync;