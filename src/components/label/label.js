import React, { useState, useEffect } from "react";
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

function Label(props) {
  const { created, timer, onComplete, descriptionText } = props;

  let createdTimerId = 0;

  let [createdTime, setCreatedTime] = useState(new Date(created));
  let [timerTimer, setTimer] = useState(timer || 0);
  let [timerTimerId, setTimerTimerId] = useState(0);

  const updateCreatedTime = () => {
    setCreatedTime(created);
  }

  const setUpdateCreatedTimeInterval = () => {
    createdTimerId = setInterval(() => updateCreatedTime(), 60000);
  }

  const updateTimer = () => {
    setTimer((prev) => prev+1);
    return timerTimer;
  }

  const stopTimer = () => {
    console.log('timerTimerId stop', timerTimerId)
    clearInterval(timerTimerId);
    setTimerTimerId(0);
  };

  const startTimer = () => {
    if (!timerTimerId) {
      setTimerTimerId((prev) => {
        return setInterval(() => updateTimer(), 1000)
      })
    }
  };

  useEffect(() => {
    setUpdateCreatedTimeInterval();
    return () => {
      clearInterval(createdTimerId);
      createdTimerId = 0;
      if (timerTimerId) {
        clearInterval(timerTimerId);
        setTimerTimerId(0);
      }
    }
  }, []);

  const createdTimeConfig = {
    addSuffix: true,
    includeSeconds: true,
  };
  const formatedCreatedTime = formatDistanceToNow(createdTime, createdTimeConfig);
    return (
      <label>
        <span className="title" onClick={onComplete}>
          {descriptionText}
        </span>
        <span className="description">
          <Button
            className="icon icon-play"
            onClick={startTimer}
            disabled={Boolean(timerTimerId)}
          />
          <Button
            className="icon icon-pause"
            onClick={stopTimer}
            disabled={!timerTimerId}
          />
          {getFormatedTimer(timerTimer)}
        </span>
        <span className="created">{formatedCreatedTime}</span>
      </label>
    );
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

export default Label;
