import React from 'react'
import styled from 'styled-components';

const Status = styled.p`
    font-weight: 300;
    font-size: 12px;
    color: #324BB8;
    letter-spacing: 2px;

    @media (min-width: 991.98px) { // Tablets
      font-size: 17px;
    }
`;

function CompostStatus(props) {
  return (
    <div>
      <Status>
        {props.text}
      </Status>
    </div>
  );
}

export default CompostStatus;
