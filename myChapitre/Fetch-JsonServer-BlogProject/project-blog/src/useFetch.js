import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortContlr = new AbortController();        
        // learn about abortcontroller in this netninja video https://www.youtube.com/watch?v=aKOQtGLT-Yk
        setTimeout(() => {
            fetch(url, { signal: abortContlr.signal })
                .then(res => {
                    if (!res.ok) { // error coming back from server
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setData(data);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        // auto catches network / connection error
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 1000);

        return () => abortContlr.abort();   // aborts current useEffect function and return

    }, [url])

    return { data, isPending, error };
}
export default useFetch;