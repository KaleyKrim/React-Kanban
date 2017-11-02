import React from 'react';

const Card = ( { title, assigned_to, priority } ) => {
  return (
    <div class="card">
      <br />
      { title }
      <br />
      Assigned to: { assigned_to }
      <br />
      Priority: { priority }
    </div>
  )
}

export default Card;