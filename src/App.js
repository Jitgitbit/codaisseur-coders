// import React from 'react';
// import './App.css';
// import DevelopersList from './components/DevelopersList';

import React from "react";
import { Switch, Route } from "react-router-dom";
import DevelopersList from "./components/DevelopersList";
import Homepage from "./components/Homepage";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/developers" component={DevelopersList} />
          <Route component={Homepage} />
        </Switch>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <DevelopersList/>
//       {/* <Developer/> */}
//     </div>
//   );
// }
//export default App;
