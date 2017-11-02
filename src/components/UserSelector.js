import React from 'react';

const UserSelector = ( { users } ) => {
  return (
     <div>
      {
        users.map((user) => {
          return(
            <div> {user.name} </div>
          );
        })
      }
    </div>
  )
}

export default UserSelector;