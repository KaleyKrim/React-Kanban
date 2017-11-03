import React from 'react';
import ToDo from '../ToDo';
import Doing from '../Doing';
import Done from '../Done';

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