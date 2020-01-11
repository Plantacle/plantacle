import React from 'react'
import styled from 'styled-components'
import SvgPhase1 from '../svg/Phase1';
import SvgPhase2 from '../svg/Phase2';
import SvgPhase3 from '../svg/Phase3';
import SvgPhase4 from '../svg/Phase4';
import CompostStatus from './CompostStatus';
import { measurementsApi } from '../App';

class CompostTransition extends React.Component {

  render() {

    let currentPhase = this.props.currentPhase;

    console.log(currentPhase)

    return (
      <div>
      {
        currentPhase == "phase1" ?
        <div>
            <SvgPhase1>
            </SvgPhase1>
            <CompostStatus status={this.props.status}> </CompostStatus>
        </div>

      : currentPhase == "phase2" ?
        <div>
            <SvgPhase2>
            </SvgPhase2>
            <CompostStatus status={this.props.status}> </CompostStatus>
        </div>
      : currentPhase == "phase3" ?
        <div>
            <SvgPhase3>
            </SvgPhase3>
            <CompostStatus status={this.props.status}> </CompostStatus>
        </div>
      : currentPhase == "phase4" ?
        <div>
            <SvgPhase4>
            </SvgPhase4>
            <CompostStatus status={this.props.status}> </CompostStatus>
        </div>
      : <CompostStatus>Er is iets misgegaan</CompostStatus>
      }
     </div>
    )
  }
}

export default CompostTransition;
