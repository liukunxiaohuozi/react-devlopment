import React, { Component } from "react";
import { Button } from "antd";
import { get, post } from "../units/request";
  import './index.less'
class App extends Component {
  componentDidMount() {
    get("/api/user/list", { page: 0, pagesize: 20 }).then(res => {
      console.log(res);
    });
  }
  render() {
    return (
      <div>
        天才第一步<Button type="primary">按钮</Button>
         <img src="/men.jpg" style={{width:100,height:100}}></img>
         <div className="bgImg">2dsdsdds</div>
      </div>
      
    );
  }
}
export default App;
