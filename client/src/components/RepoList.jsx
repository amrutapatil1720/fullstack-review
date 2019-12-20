import React from 'react';
import SingleRepo from './singleRepo.jsx'

const RepoList = (props) => {
  console.log("gfjjmhkjhnkjm",props);
  return (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
   { props.repos.map(repo => { return <SingleRepo singleRepo={repo}/>}
   )}

  </div>
  );
  }

export default RepoList;