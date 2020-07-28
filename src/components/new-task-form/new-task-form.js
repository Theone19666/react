import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextBox from '../text-box';
import './new-task-form.css';

const inputProps = {
  className: 'new-todo',
  placeholder: 'What needs to be done?',
  autoFocus: true,
};
class NewTaskForm extends Component {
  state = {
    inputValue: '',
  };

  onSubmit = (event) => {
    const { onAddItem } = this.props;
    const { inputValue } = this.state;
    event.preventDefault();
    onAddItem(inputValue);
    // this.state.inputValue = "";
    this.setState({
      inputValue: '',
    });
  };

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <form method="POST" onSubmit={this.onSubmit}>
        <TextBox {...inputProps} onChange={this.onChangeInput} value={inputValue} />
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  onAddItem: PropTypes.func,
};

NewTaskForm.defaultProps = {
  onAddItem: () => {},
};

export default NewTaskForm;
