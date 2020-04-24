import React, { Component } from 'react';
import { connect } from 'react-redux';
import{startTimer,resetTimer,stopTimer}from './actions'


function getElapsedTime(baseTime, startedAt, stoppedAt = new Date().getTime()) {
    if (!startedAt) {
      return 0;
    } else {
      return stoppedAt - startedAt + baseTime;
    }
  }

  class Timer extends Component {
    componentDidMount() {
      this.interval = setInterval(this.forceUpdate.bind(this), this.props.updateInterval || 33);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }
   

    render() {
      const { baseTime, startedAt, stoppedAt } = this.props;
      const elapsed = getElapsedTime(baseTime, startedAt, stoppedAt);

      return (
        <div>
          <div>Time: {elapsed}</div>
          <div>
          <button onClick={() => this.props.startTimer(elapsed)}>Start</button>
          <button onClick={() => this.props.stopTimer()}>Stop</button>
          <button onClick={() => this.props.resetTimer()}>Reset</button>
          </div>
        </div>
      );
    }
  }

//   function mapStateToProps(state) {
//     const { baseTime, startedAt, stoppedAt } = state;
//     return { baseTime, startedAt, stoppedAt };
//   }
  // const mapStateToProps = (state) =>{
  //   const { baseTime, startedAt, stoppedAt } = state;
  //     return{
  //       //   startTimer: state.startTimer,
  //       //   stopTimer: state.stopTimer,
  //       //   resetTimer: state.resetTimer
  //        baseTime, startedAt, stoppedAt 
  //     }
  // }

  // //Timer = ReactRedux.connect(mapStateToProps, { startTimer, stopTimer, resetTimer })(Timer);

  // export default connect(mapStateToProps)(Timer);

  function mapStateToProps(state) {
    const { baseTime, startedAt, stoppedAt } = state;
    return { baseTime, startedAt, stoppedAt };
  }
  
  Timer = ReactRedux.connect(mapStateToProps, { startTimer, stopTimer, resetTimer })(Timer);

