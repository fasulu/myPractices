import React from 'react'

class Child extends React.Component {

    constructor() {
        super()
        this.state = {
            childData: ""
        }
    }

    render(props) {

        return (

            <div>

                <button
                    onClick={() =>
                        this.props.passFunction("Child Data, I'm fine my Parent.")}>
                    Get Child Data Return
                    </button>
                {this.props.dataPassToChild}
            </div>
        )
    }
}

export default Child;