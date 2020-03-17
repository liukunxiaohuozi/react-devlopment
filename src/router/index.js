import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link ,Redirect} from "react-router-dom";
import Index from "../home/index";
import Menu from "../menu/index";
import User from "../user/index";

import "./index.less";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="menuList">
            <Link to="/home">首页</Link>
            <Link to="/menu">中间页</Link>
            <Link to="/user">个人页</Link>
          </div>
          <div>
            <Route path="/home" exact component={Index} />
            <Route path="/menu" component={Menu} />
            <Route path="/user" component={User} />
            <Redirect from="/*" to="/home" />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
