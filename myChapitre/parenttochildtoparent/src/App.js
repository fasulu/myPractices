import React from 'react';
import './App.css';
// import './Child'
import Child from './Child';

class Parent extends React.Component {

  constructor(props) {
    super(props)
    this.state =
    {
      parentData: "Parent Data, How are you Child!", childReturn: ""
    }
  }
  onChangeChildReturen = (valueChild) => {
    this.setState({
      childReturn: valueChild
    });
  }

  render() {

    console.log("iam in app.js display state : ", this.state.parentData);
    console.log("iam in app.js display state childReturn : ", this.state.childReturn);

    return (

      <div>

        <Child
          dataPassToChild={this.state.parentData}
          passFunction={this.onChangeChildReturen} />

          <h4>{this.state.childReturn}</h4>

      </div>

    );
  }
}

export default Parent;
