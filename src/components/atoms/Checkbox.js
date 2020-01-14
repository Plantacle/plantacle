import React from 'react';
import styled from 'styled-components';
import SvgCheck from '../svg/Check.js';

const Button = styled.button`
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
                <Button type="checkbox" checked={this.props.isChecked} onChange={this.props.toggleChange}>
                </Button>
        )
    }
}


export default Checkbox;
