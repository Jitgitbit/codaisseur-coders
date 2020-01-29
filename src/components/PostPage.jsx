import React from "react";
import { connect } from "react-redux";
import {fetchPost} from '../store/post/actions';

class PostPage extends React.Component {
  componentDidMount() {
    const post_id = this.props.match.params.id;
    console.log("Now let's fetch this post:", post_id);
    this.props.dispatch(fetchPost(post_id))
  }
  render() {
    if(!this.props.post.data) {
      return (
      <div>
        <p>Loading...</p>
      </div>)
    } else {
      //if(this.props.post){console.log('The post data', this.props.post.data)}
      const title = this.props.post.data.title;
      console.log(title);
      const content = this.props.post.data.content;
      return (
        <div>
          <h1>{title}</h1>
          <h2>{content}</h2>
        </div>
      );
    }
   
  }
}
function mapStateToProps(reduxState) {
  console.log("redux state?", reduxState);
  return {
    post: reduxState.post,
  };
}
export default connect(mapStateToProps)(PostPage);
