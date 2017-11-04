import React from 'react';

const CardDetails = (props) => {
  return (
    <div className="card-details">
      <div className="card-title">
        <br />
        { props.title }
      </div>

      <div className="card-specs">
        <br />
        Assigned to: { props.assigned_to }
        <br />
        Priority: { props.priority }
      </div>
      <br />
    </div>
  );
}


export default CardDetails;