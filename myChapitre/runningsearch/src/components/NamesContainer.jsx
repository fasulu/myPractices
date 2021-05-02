import React from 'react';
import Name from './Name';

class NamesContainer extends React.Component {

    render() {

        return (
            <div>   
                {this.props.names.map(name => <Name name = {name}/>)}
            </div>
        )
    }
}

export default NamesContainer;