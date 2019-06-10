import React from 'react';
import useResource from './useResources';

const UserList = (props) => {

    const resources = useResource(props.resource);
    return ( 
        <ul>
            {resources.map(record=>
            <li key={record.id}>{record.name}</li>
            )}
        </ul>
    );
}

export default UserList;