import React from 'react'
import styled from 'styled-components';
import SvgCheck from '../svg/Check';
import SvgExclamation from '../svg/Exclamation';

const StatusWrapper = styled.div`
    position: fixed;
    top: 130px;
    right: -16px;
    display: flex;

`;

const Status = styled.p`
    font-weight: 300;
    font-size: 12px;
    color: #324BB8;
    letter-spacing: 2px;
    margin-right: ${props => props.primary ? '5px' : '-10px'};
    width: ${props => props.primary ? '130px' : '200px'};
    margin-top: -6px;

    @media (min-width: 991.98px) { // Tablets
        font-size: 17px;
        width: 210px;
    }
`;

const StatusLine = styled.div`
    width: 30px;
    height: 3px;
    background-color: #324BB8;
    margin-top: 7px;
    margin-left: 5px;

    @media (min-width: 991.98px) { // Tablets
        width: 40px;
        height: 5px;
    }
`;

const StatusIcon = styled.div`
    width: 16px;
    height: 16px;
    background-color: #FFC759;
    border-radius: 50%;

    @media (min-width: 991.98px) { // Tablets
        width: 22px;
        height: 22px;
    }

`;

const IconsWrapper = styled.div`
    display: flex;
    margin-top: 12px;
`;

function CompostStatus(props) {
    return (
    <div>
        <StatusWrapper>
            {props.warning ? (
                <IconsWrapper>
                    <Status>
                        {props.status}
                    </Status>
                    <StatusIcon>
                        <SvgExclamation> </SvgExclamation>
                    </StatusIcon>
                    <StatusLine />
                </IconsWrapper>
           ) : (
           <IconsWrapper>
               <Status primary>
                   {props.status}
               </Status>
              <StatusIcon>
                  <SvgCheck />
              </StatusIcon>
              <StatusLine />
          </IconsWrapper>
          )}
      </StatusWrapper>
  </div>
        );
}

export default CompostStatus;
