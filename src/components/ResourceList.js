import axios from 'axios';
import React from 'react';

class ResourceList extends React.Component {
    state = { resourceList: []};

    componentDidMount(){
        this.updateList(this.props.resource);
    }
    componentDidUpdate(preProps){
        if(preProps.resource !== this.props.resource){
            this.updateList(this.props.resource);
        }
    }

    async updateList(resource){
        const res = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        console.log(res.data.length);
        this.setState({ resourceList: res.data });
    }
    renderList(){
        if(!this.state.resourceList.length > 0){ return null }

            return this.state.resourceList.map(a => (
                <div key={a.id} className="ui list">{a.title}</div>
            ));
    }
    render(){
        return (
            <div>{this.renderList()}</div>
        );
    }
}

export default ResourceList;