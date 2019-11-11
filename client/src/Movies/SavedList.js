import React from 'react';
import { NavLink } from 'react-router-dom';

const SavedList = props => {
  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => {
      return (
        <div key={movie.title}>
          <NavLink to={`movies/${movie.id}`}> 
          <span className="saved-movie">{movie.title}</span>
          </NavLink>
        </div>
      )
    })}
    <div className="home-button"><NavLink to='/'>Home</NavLink></div>
  </div>
)};

export default SavedList;
