import React from 'react';

const SingleRepo =(props) => {
  console.log(props);
  return (
    <div>
      <li>{props.singleRepo.id}: {props.singleRepo.name}:{props.singleRepo.full_name}</li>
    </div>
  );
}

export default SingleRepo;