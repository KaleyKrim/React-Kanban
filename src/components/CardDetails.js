import React from 'react';

const CardDetails = (props) => {
  return (
    <div className="card-details">
      <div className="card-title">
        <br />
        { props.title }
      </div>

      {
        props.image ?
        <div className="img-box">
          <img src={ props.image } className="img"/>
        </div> : null
      }

    </div>
  );
}


export default CardDetails;