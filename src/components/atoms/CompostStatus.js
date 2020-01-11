import React from 'react'
import styled from 'styled-components';

const StatusWrapper = styled.div`
    position: absolute;
    top: -80px;
    right: 10px;
    width: 200px;
`;

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
    <StatusWrapper>
      <Status>
        {props.status}
      </Status>
    </StatusWrapper>
  );
}

export default CompostStatus;
