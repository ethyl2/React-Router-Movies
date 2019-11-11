import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => {
  return (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => {
      return (
        <div key={movie.title}>
          <Link to={`movies/${movie.id}`}> 
          <span className="saved-movie">{movie.title}</span>
          </Link>
        </div>
      )
    })}
    <div className="home-button"><Link to='/'>Home</Link></div>
  </div>
)};

export default SavedList;
