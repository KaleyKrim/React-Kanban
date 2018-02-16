import React from 'react';
import Column from '../containers/Column';

const KanbanBoard = () => {
  return (
    <div id="main-board">
      <Column status={1} headerText="Boring Ideas"/>
      <Column status={2} headerText="Average Ideas"/>
      <Column status={3} headerText="Great Ideas"/>
    </div>
  );
}



export default KanbanBoard;