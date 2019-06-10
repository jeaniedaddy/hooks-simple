import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
    const [ resource, setResource ] = useState("posts");

    return (
        <div className="ui container">
            <button onClick={()=> setResource("posts")} className="ui button">Posts</button>
            <button onClick={()=> setResource("todos")} className="ui button">Todos</button>
            <ResourceList resource={resource}/>
        </div>
    );
}


export default App;