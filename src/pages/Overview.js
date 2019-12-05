import React from 'react'
import Measurements from '../components/molecules/Measurements';
import CurrentDay from '../components/atoms/CurrentDay';
import CompostTransition from '../components/atoms/CompostTransition';
import OverviewButton from '../components/atoms/OverviewButton';


class Overview extends React.Component {
  render() {
    return (
      <div>
          <div className="measurements">

            <Measurements />

          </div>

          <br />
          <br />
          <br />

          <div className="date">

            <CurrentDay />

          </div>

          <br />
          <br />
          <br />

          <div className="transition">
            <CompostTransition />
          </div>


          <br />

          <div className="button">
            <OverviewButton />
          </div>


      </div>
    )
  }
}


export default Overview;
