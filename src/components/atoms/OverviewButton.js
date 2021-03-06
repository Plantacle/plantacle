import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
    width: 179px;
    letter-spacing: 1px;
    height: 41px;
    border-radius: 6px;
    border: none;
    margin: 0;
    text-decoration: none;
    background: #FFC759;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
`;

function OverviewButton() {
    return (
        <div>
            <Button>
                Taken bekijken
            </Button>
        </div>
    );
}

export default OverviewButton;
