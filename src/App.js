import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  state = {
    posts:[],
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      this.setState({posts:response.data});
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    })
  }
  render() {
    const posts=this.state.posts;
    const allposts=posts.map((post, id) =>{
      return (
        <div>
          <li key={id}>{post.id}</li>
          <p>{post.title}</p>
        </div>
      )
    })
    return (
      <div>
        {allposts}
      </div>
    )
  }
}
