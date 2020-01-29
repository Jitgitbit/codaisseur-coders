// src/components/DevelopersList.js
import React from "react";
import { connect } from "react-redux";
import api from "../api";
import Developer from "./Developer";
import { developersFetched } from '../store/developers/actions';

// The "unconnected" inner component:
class DevelopersList extends React.Component {
  componentDidMount() {
    // Do the data fetch...
    api("/developers").then(data => {
      console.log('data from', data )
      // Tell the Redux store the data has been fetched
      // this.props.dispatch({
      //   type: "developers/FETCHED",
      //   payload: data,
      // });
      this.props.dispatch(developersFetched(data));
    });
  }
  render() {
    if(this.props.devs){console.log('The devs data', this.props.devs.rows)}
    const loading = !this.props.devs;
    return (
      <div>
        <h1>Codaisseur developers</h1>
          {loading ? <p>Loading...</p> : <p>We have {this.props.devs.count} developers!</p>}
        <h2>
          {!loading && this.props.devs.rows.map((dev, index) => (          //!loading had to be added, because we otherwise would start from null, so the props of null can't be read, so this would give an error
            <Developer name={dev.name} email={dev.email} key={index}/>      // key again! react!
            ))
          }
        </h2>
      </div>
    );
  }
}
// The wrapper component that connects to the Redux store
//  and passes down props derived from the store's state
//  to the inner component:
function mapStateToProps(reduxState) {
   console.log("redux state?", reduxState);
  return {
    devs: reduxState.developers,
  };
}
// ...which is what we export as the default (only) export
export default connect(mapStateToProps)(DevelopersList);