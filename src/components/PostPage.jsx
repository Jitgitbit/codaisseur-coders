import React from "react";
import { connect } from "react-redux";
import {fetchPost} from '../store/post/actions';
import ReactMarkdown from "react-markdown";

class PostPage extends React.Component {
  componentDidMount() {
    const post_id = this.props.match.params.id;
    console.log("Now let's fetch this post:", post_id);
    this.props.dispatch(fetchPost(post_id))
  }
  render() {
    if(!this.props.post) {
      return (
      <div>
        <p>Loading...</p>
      </div>)
    } else {
      //if(this.props.post){console.log('The post data', this.props.post.data)}
      const title = this.props.post.title;
      console.log(title);
      const content = this.props.post.content;
      const comments = this.props.postComments;
      return (
        <div>
          <h1>{title}</h1>
          content: <ReactMarkdown source={content} />
          comments: {comments.map((comment, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '50px', paddingRight: '50px'}}>
              <h3>{comment.text}</h3>
              <h3>{comment.developer.name}</h3>
            </div>
          ))}
        </div>
      );
    }
   
  }
}
function mapStateToProps(reduxState) {
  console.log("redux state?", reduxState);
  return {
    post: reduxState.post.data,
    postComments: reduxState.post.comments
  };
}
export default connect(mapStateToProps)(PostPage);
