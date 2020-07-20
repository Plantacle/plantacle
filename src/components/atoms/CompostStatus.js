import React from 'react'
import styled from 'styled-components';
import SvgCheck from '../svg/Check';
import SvgExclamation from '../svg/Exclamation';

const StatusWrapper = styled.div`
    position: fixed;
    top: 130px;
    right: -16px;
    display: flex;

    @media (min-width: 1024px) { // Tablets
        right: 180px;
        width: 280px;
        height: 95px;
        background-color: #F4F6FF;
        border-radius: 13px;
    }
`;

const Status = styled.p`
    font-weight: 300;
    font-size: 12px;
    color: #324BB8;
    letter-spacing: 2px;
    margin-right: ${props => props.primary ? '5px' : '-10px'};
    width: ${props => props.primary ? '130px' : '200px'};
    margin-top: -6px;

    @media (min-width: 1024px) { // Tablets
        font-size: 17px;
        width: 210px;
        text-align: center;

        position: absolute;
        top: 50%; right: 50%;
        transform: translate(50%,-50%);
    }
`;

const StatusLine = styled.div`
    width: 30px;
    height: 3px;
    background-color: #324BB8;
    margin-top: 7px;
    margin-left: 5px;

    @media (min-width: 1024px) { // Tablets
        display: none;
    }
`;

const StatusIcon = styled.div`
    width: 16px;
    height: 16px;
    background-color: #FFC759;
    border-radius: 50%;

    @media (min-width: 1024px) { // Tablets
        position: absolute;
        right: -5px;
        top: -5px;
        width: 25px;
        height: 25px;

        background-color: #324BB8;
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
