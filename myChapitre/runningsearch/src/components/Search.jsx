import React from 'react';

class Search extends React.Component {

    onChangeText = (e) => {
        this.props.editSearchTerm(e);
    }


    render() {
        return (

            <div>
                <input type='text'
                    value={this.props.searchTerm}
                    onChange={this.onChangeText}
                    placeholder='Search for a name!'
                />
            </div>
        )
    }
}

export default Search

