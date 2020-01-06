import React from 'react'
import styled from 'styled-components';

class Checkbox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isChecked: true,
      };
    }
    toggleChange = () => {
      this.setState({
        isChecked: !this.state.isChecked,
      });
    }
    render() {
      return (
        <label>
          <input type="checkbox"
            checked={this.props.isChecked}
            onChange={this.props.toggleChange}
          />
         </label>
      );
    }
  }

  export default Checkbox

