import React from 'react';
import ToDo from '../containers/ToDo';
import Doing from '../containers/Doing';
import Done from '../containers/Done';

const KanbanBoard = () => {
  return (
    <div id="main-board">
      <ToDo />
      <Doing />
      <Done />
    </div>
  );
}



export default KanbanBoard;