import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import { LabelContext } from "../todo-context";

import "./label.css";

import Button from "../button";

import { getFormatedTimer } from "../../js/utils";

const createdTimeConfig = {
  addSuffix: true,
  includeSeconds: true,
};

function Label(props) {
  const { created, timer, onComplete, descriptionText, id } = props;

  let createdTimerId = 0;

  let [createdTime, setCreatedTime] = useState(created);
  let [timerTimer, setTimer] = useState(timer || 0);
  let [timerTimerId, setTimerTimerId] = useState(0);

  const updateTimerInTodosList = useContext(LabelContext);

  const updateCreatedTime = () => {
    setCreatedTime(created);
  };

  const setUpdateCreatedTimeInterval = () => {
    createdTimerId = setInterval(() => updateCreatedTime(), 60000);
  };

  const updateTimer = () => {
    setTimer((prev) => prev + 1);
    return timerTimer;
  };

  const stopTimer = () => {
    console.log("timerTimer", timerTimer);
    updateTimerInTodosList(id, timerTimer);
    clearInterval(timerTimerId);
    setTimerTimerId(0);
  };

  const startTimer = () => {
    if (!timerTimerId) {
      setTimerTimerId((prev) => {
        return setInterval(() => updateTimer(), 1000);
      });
    }
  };

  useEffect(() => {
    setUpdateCreatedTimeInterval();
    return () => {
      clearInterval(createdTimerId);
      createdTimerId = 0;
      if (timerTimerId) {
        /*clearInterval(timerTimerId);
        setTimerTimerId(0); */
        stopTimer();
      }
    };
  }, []);

  const formatedCreatedTime = formatDistanceToNow(
    createdTime,
    createdTimeConfig
  );

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
  timer: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  id: PropTypes.string,
};

Label.defaultProps = {
  onComplete: () => {},
  descriptionText: "",
  created: 0,
  timer: 0,
};

export default Label;
