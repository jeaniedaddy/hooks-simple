import axios from 'axios';
import { useState, useEffect } from 'react';


const useResource = (resource) => {
    const [resources, setResources] = useState([]);

    useEffect(()=>{
        (async ()=>{
            const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
            setResources( res.data );
        })(resource)},[resource]);
    return resources; 
}

export default useResource ; 