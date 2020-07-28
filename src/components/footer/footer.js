import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';
import Filters from '../filters';
import Button from '../button';
import TodoCount from '../todo-count';

const buttonClearCompletedProps = {
  className: 'clear-completed',
  text: 'Clear completed',
};
function Footer(props) {
  const { notCompletedcounter, onFilterClicked, filtersList, onDeleteCompleted } = props;
  return (
    <footer className="footer">
      <TodoCount counter={notCompletedcounter} />
      <Filters onFilterClicked={onFilterClicked} filtersList={filtersList} />
      <Button {...buttonClearCompletedProps} onClick={onDeleteCompleted} />
    </footer>
  );
}

Footer.propTypes = {
  notCompletedcounter: PropTypes.number,
  filtersList: PropTypes.arrayOf(PropTypes.object),
  onFilterClicked: PropTypes.func,
  onDeleteCompleted: PropTypes.func,
};

Footer.defaultProps = {
  notCompletedcounter: 0,
  onFilterClicked: () => {},
  onDeleteCompleted: () => {},
  filtersList: [],
};

export default Footer;
