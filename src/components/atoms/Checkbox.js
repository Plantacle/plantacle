import React from 'react';
import styled from 'styled-components';
import SvgCheck from '../svg/Check.js';

const Label = styled.label`
    display: block;
    position: relative;
    padding-left: 10px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-right: 2px;
`;


class Checkbox extends React.Component {
    render() {
        return(
            <Label classname="checkbox-label">
                <input type="checkbox" checked={this.props.isChecked} onChange={this.props.toggleChange}>
                </input>
                <span> </span>
            </Label>
        )
    }
}


export default Checkbox;
