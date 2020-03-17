import React, { Component } from "react";
import { Button } from "antd";
import { get, post } from "../units/request";
class App extends Component {
  componentDidMount() {
    get("https", { page: 0, pagesize: 20 }).then(res => {
      console.log(res);
    });
  }
  render() {
    return (
      <div>
       这都是个人页
      </div>
    );
  }
}
export default App;
