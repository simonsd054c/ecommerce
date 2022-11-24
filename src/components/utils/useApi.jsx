import { useEffect, useState } from "react"
import axios from "axios"

const useApi = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get(url)
            .then((res) => res.data)
            .then((json) => {
                setData(json)
                setIsLoading(false)
            })
    }, [url])

    return [isLoading, data]
}

export default useApi



//useMemo
//a complex function - function

// useMemo(function)
//if this function is called with args (a, b), then it returns c - it takes 2 seconds

//if this function is called again with the same args (a, b), then it won't execute anything inside that function
//and will return 'c' directly. it saves 2 seconds.