import React from 'react';

const Select = (props) => {
  return (
      <select className="select" name={props.name} onChange={props.handler}>
        {
          props.list.map((item) => {
            return(
             <option value={item.id}> {item[props.show]} </option>
            );
          })
        }
      </select>
  );
}

export default Select;