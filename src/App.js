import React from 'react';
import './reset.css'
import {Route, Switch} from 'react-router-dom';
import './index.css';
import Auth from './Components/Auth/Auth';

import Landing from './Components/Landing';
import Inventory from './Components/Inventory/Inventory';
// import List from './Components/List';

// import Vocab from './Components/Vocab';
import Signin from './Components/Auth/Signin';
import Register from './Components/Auth/Register';



const App = () => { 
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/Auth" component={Auth}/>
        <Route path="/Home" component={Inventory}/>
        {/* <Route path="/Study" component={Study}/> */}
        <Route path="/Signin" component={Signin}/>
        <Route path="/Register" component={Register}/>
        {/* <Route path="/Vocab" component={Vocab}/> */}
      </Switch>
    </div>
  )
};

export default App;
