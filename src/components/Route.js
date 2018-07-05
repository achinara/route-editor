import React from 'react';
import PropTypes from 'prop-types';
import './Route.css';

const Route = ({name = '', onRemove = f => f, id}) => {
  return (
    <div className="route">
      <span className="route__text">{name}</span>
      <button className="route__button" onClick={() => onRemove(id)}>
        <i className="fas fa-times route__icon"/>
      </button>
    </div>
  )
}

Route.propTypes = {
  title: PropTypes.string,
  onRemove: PropTypes.func
}

export default Route;