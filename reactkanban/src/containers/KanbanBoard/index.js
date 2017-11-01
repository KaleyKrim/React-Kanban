import React from 'react';
import Card from '../../components/Card';

const KanbanBoard = ( { cards } ) => {
  return (
    <div>
      {
        cards.map((card) => {
          return(
            <Card title={card.title} />
          );
        })
      }
    </div>


  );
}



export default KanbanBoard;