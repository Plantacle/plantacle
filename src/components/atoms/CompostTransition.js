import React from 'react'
import styled from 'styled-components'
import CompostStatus from './CompostStatus';
import { measurementsApi } from '../App';
import svgImage1 from '../../assets/svg/phase1.png'; // with import
import svgImage2 from '../../assets/svg/phase2.png'; // with import
import svgImage3 from '../../assets/svg/phase3.png'; // with import
import svgImage4 from '../../assets/svg/phase4.png'; // with import

const CompostImageWrapper = styled.div`
    width: 254px;
    height: 270px;

    @media (min-width: 390px) { // Tablets
        width: 280px;
        height: 280px;
    }

    @media (min-width: 1024px) { // Tablets
        width: 350px;
        height: 350px;
        margin-top: 70px;
    }
`;

const CompostWrapper = styled.div`
    margin-bottom: 40px;
    margin-right: 50px;

    @media (min-width: 390px) { // Tablets
        margin-right: 0;
        margin-top: -30px;
        margin-bottom: 80px;
    }

    @media (min-width: 991.98px) { // Tablets
        margin-top: -90px;
        margin-right: 0;
        margin-bottom: 40px;
    }
`;

const CompostImage = styled.img`
    max-width: 100%;
    max-width: 100%;
`;

class CompostTransition extends React.Component {
    render() {

      let currentPhase = this.props.currentPhase;

    return (
    <div>
        {
          currentPhase == "phase1" ?
          <CompostWrapper>
              <CompostImageWrapper>
                  <CompostImage src={svgImage1} />
              </CompostImageWrapper>
              <CompostStatus status={this.props.status} warning={this.props.warning}> </CompostStatus>
          </CompostWrapper>

        : currentPhase == "phase2" ?
        <CompostWrapper>
            <CompostImageWrapper>
                <CompostImage src={svgImage2} />
            </CompostImageWrapper>
            <CompostStatus status={this.props.status} warning={this.props.warning}> </CompostStatus>
        </CompostWrapper>
        : currentPhase == "phase3" ?
        <CompostWrapper>
            <CompostImageWrapper>
                <CompostImage src={svgImage3} />
            </CompostImageWrapper>
            <CompostStatus status={this.props.status} warning={this.props.warning}> </CompostStatus>
        </CompostWrapper>
        : currentPhase == "phase4" ?
        <CompostWrapper>
            <CompostImageWrapper>
                <CompostImage src={svgImage4} />
            </CompostImageWrapper>
            <CompostStatus status={this.props.status} warning={this.props.warning}> </CompostStatus>
        </CompostWrapper>
        : <CompostStatus>Er is iets misgegaan</CompostStatus>
        }
   </div>
    )
    }
}

export default CompostTransition;
