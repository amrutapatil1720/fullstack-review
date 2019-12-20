import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import {ajax} from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  search(term) {
    console.log(`${term} was searched`);
    // TODO
  ajax({

    url: '/repos',
    type: 'POST',
    dataType: 'json',
    data : {username: term },
    success: data => { console.log("Post data is:",data); }
  })
}

componentDidMount() {
  ajax({
    url: "/repos",
    type: 'GET',
    success: data =>{ this.setState({repos:data})}
  })
}


  render () {
    console.log(this.state.repos);
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));