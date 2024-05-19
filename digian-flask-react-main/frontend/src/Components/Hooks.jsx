import { useState, useEffect } from "react";

const fetchData = async (url, options = {}) => {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
        throw new Error(data.message);
    }
    return data;
}

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        let controller = new AbortController();
        let signal = controller.signal;
        (async () => {
            try {
                const data = await fetchData(url, {signal, ...options});
                setData(data);
            } catch (error) {
                if (error.name !== "AbortError") {
                    setError(error.message);
                    console.error(error);
                } else {
                    console.error("Request aborted");
                }
            }
        })();
        return () => {controller.abort()};
    }, [url]);
    return [data, error];
}

const useCustomers = () => {
    const url = 'http://127.0.0.1:9090/api/customer';
    return useFetch(url);
}

const useMessages = () => {
    const url = 'http://127.0.0.1:9090/api/message';
    return useFetch(url);
}

const useNewsletter = () => {
    const url = 'http://127.0.0.1:9090/api/newsletter';
    return useFetch(url);
}

const useQuote = () => {
    const url = 'http://127.0.0.1:9090/api/quote';
    return useFetch(url);
}

const useService = () => {
    const url = 'http://127.0.0.1:9090/api/service';
    return useFetch(url);
}

const useUser = () => {
    const url = 'http://127.0.0.1:9090/api/user';
    return useFetch(url);
}

export { useCustomers, useMessages, useNewsletter, useQuote, useService, useUser };