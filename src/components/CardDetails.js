import React from 'react';

const CardDetails = (props) => {
  return (
    <div className="card-content">
      <div className="card-title">
        <br />
        { props.title }
      </div>

      <div className="card-details">
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