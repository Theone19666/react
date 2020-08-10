import React, { Component } from "react";
import PropTypes from "prop-types";
import "./label.css";
import { formatDistanceToNow } from "date-fns";
import Button from "../button";

function getFormatedTimer(timer = 0) {
  // допустим, 35000 секунд
  let seconds = 0;
  let minutes = Math.trunc(timer / 60); // 583 минуты в таймере
  const hours = minutes >= 60 ? Math.trunc(minutes / 60) : 0; // 9  часов в таймере
  if (minutes > 59) {
    const hoursCountInSeconds = hours * 3600; // 32400 секунд: 9 часов * количество секунд в часе
    const minutesCountInSeconds = timer - hoursCountInSeconds; // 2600 секунд - количество минут в секундах
    minutes = Math.trunc(minutesCountInSeconds / 60); // 43 минуты
    const minutesResultInSeconds = minutes * 60; // 2580 секунд - количество минут в сенкудах в таймере
    seconds = Math.abs(minutesCountInSeconds - minutesResultInSeconds);
  } else {
    seconds = Math.trunc(timer - minutes * 60);
  }
  return `${hours ? `${hours}:` : ""}${minutes > 9 ? minutes : `0${minutes}`}:${
    seconds > 9 ? seconds : `0${seconds}`
  }`;
}

export default class Label extends Component {
  createdTimerId = 0;
  // timerTimerId = 0;

  state = {
    createdTime: new Date(this.props.created),
    timer: this.props.timer || 0,
    timerTimerId: 0,
  };

  componentDidMount() {
    this.setUpdateInterval();
  }

  componentWillUnmount() {
    clearInterval(this.createdTimerId);
    this.createdTimerId = 0;
    if (this.state.timerTimerId) {
      clearInterval(this.state.timerTimerId);
      this.setState({ timerTimerId: 0 });
    }
  }

  updateCreatedTime() {
    this.setState({
      createdTime: new Date(this.props.created),
    });
  }

  setUpdateInterval() {
    this.createdTimerId = setInterval(() => this.updateCreatedTime(), 60000);
  }

  updateTimer() {
    this.setState((state) => {
      return { timer: state.timer + 1 };
    });
  }

  stopTimer = () => {
    clearInterval(this.state.timerTimerId);
    this.setState({ timerTimerId: 0 });
  };

  startTimer = () => {
    if (!this.timerTimerId) {
      this.setState({
        timerTimerId: setInterval(() => this.updateTimer(), 1000),
      });
    }
  };

  render() {
    const { onComplete, descriptionText } = this.props;
    const createdTime = formatDistanceToNow(this.state.createdTime, {
      addSuffix: true,
      includeSeconds: true,
    });
    return (
      <label>
        <span className="title" onClick={onComplete}>
          {descriptionText}
        </span>
        <span className="description">
          <Button
            className="icon icon-play"
            onClick={this.startTimer}
            disabled={Boolean(this.state.timerTimerId)}
          />
          <Button
            className="icon icon-pause"
            onClick={this.stopTimer}
            disabled={!this.state.timerTimerId}
          />
          {getFormatedTimer(this.state.timer)}
        </span>
        <span className="created">{createdTime}</span>
      </label>
    );
  }
}

Label.propTypes = {
  onComplete: PropTypes.func,
  descriptionText: PropTypes.string,
  created: PropTypes.number,
  timer: PropTypes.number,
};

Label.defaultProps = {
  onComplete: () => {},
  descriptionText: "",
  created: 0,
  timer: 0,
};
