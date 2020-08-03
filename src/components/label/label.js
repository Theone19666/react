import React, { Component } from "react";
import PropTypes from "prop-types";
import "./label.css";
import { formatDistanceToNow } from "date-fns";
import { render } from "@testing-library/react";

export default class Label extends Component {
  timerId = 0;

  state = {
    createdTime: new Date(this.props.created),
  };

  componentDidMount() {
    this.setUpdateInterval();
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    this.timerId = 0;
  }

  updateCreatedTime() {
    this.setState({
      createdTime: new Date(this.props.created),
    });
  }

  setUpdateInterval() {
    this.timerId = setInterval(() => this.updateCreatedTime(), 60000);
  }

  render() {
    const { onComplete, descriptionText } = this.props;
    const createdTime = formatDistanceToNow(this.state.createdTime, {
      addSuffix: true,
      includeSeconds: true,
    });
    return (
      <label>
        <span className="description" onClick={onComplete}>
          {descriptionText}
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
};

Label.defaultProps = {
  onComplete: () => {},
  descriptionText: "",
  created: 0,
};
